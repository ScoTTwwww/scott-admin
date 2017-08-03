import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { HomeState } from './home.reducer';
import { HomeAction } from './home.action';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

@Injectable()
export class HomeService {
    dataLists$: Observable<HomeState>;

    constructor(
        private store: Store<any>,
        private homeAction: HomeAction,

    ) {
        this.dataLists$ = this.store.select(store => store.dataLists);


    }

    dispatchLoad(dataLists) {
        this.store.dispatch(this.homeAction.load(dataLists));
    }


}