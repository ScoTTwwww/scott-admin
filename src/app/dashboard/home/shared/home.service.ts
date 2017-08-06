import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CREATE, EDIT, DELETE, RESET, LISTEDIT, CLEARFORM, SLIDER, TOTALLISTS, AppState } from './home.reducer';

@Injectable()
export class HomeService {
    AppState$: Observable<AppState>;
    dataLists$: Observable<Array<any>>;
    dataList$: Observable<any>;
    sliderLists$: Observable<any>;
    totalLists$: Observable<any>;

    constructor(private store: Store<AppState>) {
        this.dataLists$ = store.select<any>('counter').map(state => state.dataLists);
        this.dataList$ = store.select<any>('counter').map(state => state.dataList);
        this.sliderLists$ = store.select<any>('counter').map(state => state.sliderLists);
        this.totalLists$ = store.select<any>('counter').map(state => state.totalLists)
    }

    create(dataList) {
        this.store.dispatch({
            type: CREATE,
            payload: dataList
        });
    }

    edit(dataList) {
        this.store.dispatch({
            type: EDIT,
            payload: dataList
        });
    }

    listEdit(id) {
        this.store.dispatch({
            type: LISTEDIT,
            payload: id
        });
    }

    clearForm() {
        this.store.dispatch({
            type: CLEARFORM
        });
    }

    delete(id) {
        this.store.dispatch({
            type: DELETE,
            payload: id
        });
    }

    totalLists(totalLists) {
        this.store.dispatch({
            type: TOTALLISTS,
            payload: totalLists
        });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }

}