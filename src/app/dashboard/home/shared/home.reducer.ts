import { ActionReducer, Action } from '@ngrx/store';

import { HomeAction } from './home.action';
import * as _ from 'lodash';

export interface HomeState {
    dataLists: Array<any>,

}

const initialState: HomeState = {
    dataLists: [{
    id: 1,
    item: '交通費',
    account: 200,
    date: { "date": { "year": 2017, "month": 8, "day": 3 }, "jsdate": "2017-08-02T16:00:00.000Z", "formatted": "2017.08.03", "epoc": 1501689600 },
    text: "搭高鐵北上"
  }, {
    id: 2,
    item: '住宿費',
    account: 2000,
    date: { "date": { "year": 2017, "month": 8, "day": 3 }, "jsdate": "2017-08-02T16:00:00.000Z", "formatted": "2017.08.03", "epoc": 1501689600 },
    text: "公差住台北"
  }, {
    id: 3,
    item: '娛樂費',
    account: 300,
    date: { "date": { "year": 2017, "month": 8, "day": 3 }, "jsdate": "2017-08-02T16:00:00.000Z", "formatted": "2017.08.03", "epoc": 1501689600 },
    text: "去看電影"
  }
  ],

}

export const HomeReducer: ActionReducer<HomeState> = (state: HomeState = initialState, action: Action) => {
    switch (action.type) {
        case HomeAction.LOAD:
            return _.assign({}, state, {
                dataLists: action

            });

        default:
            return state;
    }
};