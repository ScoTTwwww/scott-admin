import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'filterItem'
})

export class FilterItemPipe implements PipeTransform {

    constructor() { }

    transform(dataLists: Array<any>, item: string): any {
        if (!item) {
            return dataLists
        } else {
            return _.filter(dataLists, { item: item })
                .map(dataList => {
                    return dataList
                })
        }
    }
}
