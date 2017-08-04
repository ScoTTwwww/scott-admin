import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';




export const CREATE = 'CREATE';
export const EDIT = 'EDIT';
export const RESET = 'RESET';
export const DELETE = 'DELETE';

export function counterReducer(state: Array<any> = [{
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
], action: Action) {

    switch (action.type) {
        case CREATE:
            var dataList = action.payload;
            return [...state, dataList]

        case EDIT:
            var newDataList = action.payload;
            var dataLists = [...state.filter(dataList => dataList.id != newDataList.id), newDataList];
            return dataLists

            case DELETE:
            var newDataListId = action.payload;
            var dataLists = state.filter((dataList) => dataList.id != newDataListId);
            return dataLists

        case RESET:
            return 0;

        default:
            return state;
    }
}