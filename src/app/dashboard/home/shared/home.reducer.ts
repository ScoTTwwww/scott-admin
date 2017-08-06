import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';


export const CREATE = 'CREATE';
export const EDIT = 'EDIT';
export const RESET = 'RESET';
export const DELETE = 'DELETE';
export const LISTEDIT = 'LISTEDIT';
export const CLEARFORM = 'CLEARFORM';
export const SLIDER = 'SLIDER';
export const TOTALLISTS = 'TOTALLISTS';


export interface AppState {
    dataLists: Array<any>,
    dataList: any,
    sliderLists: any,
    totalLists: any
}

const initialState: AppState = {
    dataLists: [{
        id: 1,
        item: '交通費',
        amount: 700,
        date: { "date": { "year": 2017, "month": 8, "day": 3 }, "jsdate": "2017-08-02T16:00:00.000Z", "formatted": "2017.08.03", "epoc": 1501689600 },
        text: "搭高鐵北上"
    }, {
        id: 2,
        item: '伙食費',
        amount: 350,
        "date": { "date": { "year": 2017, "month": 8, "day": 2 }, "jsdate": "2017-08-01T16:00:00.000Z", "formatted": "2017.08.02", "epoc": 1501603200 },
        text: "跟朋友去逢甲吃牛肉麵"
    }, {
        id: 3,
        item: '娛樂費',
        amount: 300,
        "date": { "date": { "year": 2017, "month": 8, "day": 2 }, "jsdate": "2017-08-01T16:00:00.000Z", "formatted": "2017.08.02", "epoc": 1501603200 },
        text: "自己去看電影"
    }, {
        id: 4,
        item: '伙食費',
        amount: 100,
        "date": { "date": { "year": 2017, "month": 8, "day": 1 }, "jsdate": "2017-07-31T16:00:00.000Z", "formatted": "2017.08.01", "epoc": 1501516800 },
        text: "跟朋友去吃豆花"
    }
    ],
    dataList: {
        item: null,
        date: null,
        amount: null,
        text: null
    },
    sliderLists: { amount1: 15000, amount2: 12000, amount3: 7000, amount4: 3000 },
    totalLists: {}
}

export function counterReducer(state: AppState = initialState, action: Action) {

    switch (action.type) {
        case CREATE:
            var dataList = action.payload;
            return _.assign({}, state, {
                dataLists: [...state.dataLists, dataList]
            });

        case EDIT:
            var newDataList = action.payload;
            var filterToStatus = _.findIndex(state.dataLists, (O) => { return O.id == newDataList.id });
            // var dataListFindById = _.find(state.dataLists, { id: newDataList.id });
            state.dataLists[dataListFindById] = newDataList;
            // var dataLists = [...state.dataLists.filter(dataList => dataList.id != newDataList.id), newDataList];
            return _.assign({}, state, {
                dataLists: state.dataLists
            });

        case LISTEDIT:
            var id = action.payload;
            var dataListFindById = _.find(state.dataLists, { id: id });
            return _.assign({}, state, {
                dataList: dataListFindById

            });

        case DELETE:
            var newDataListId = action.payload;
            var dataLists = state.dataLists.filter((dataList) => dataList.id != newDataListId);
            return _.assign({}, state, {
                dataLists: dataLists
            });

        case CLEARFORM:
            return _.assign({}, state, {
                dataList: {
                    item: null,
                    date: null,
                    amount: null,
                    text: null
                }
            });

        case TOTALLISTS:
            return _.assign({}, state, {
                totalLists: action.payload
            });

        case RESET:
            return 0;

        default:
            return state;
    }
}