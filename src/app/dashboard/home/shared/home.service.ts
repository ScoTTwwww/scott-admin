import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CREATE, EDIT, DELETE, RESET } from './home.reducer';

interface AppState {
    counter: Array<any>;
}



@Injectable()
export class HomeService {
    AppState$: Observable<AppState>;
    dataLists$: Observable<Array<any>>;

    constructor(private store: Store<AppState>) {
        this.dataLists$ = store.select<any>('counter');
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

    delete(id) {
        this.store.dispatch({
            type: DELETE,
            payload: id
        });

    }

    reset() {
        this.store.dispatch({ type: RESET });
    }

}