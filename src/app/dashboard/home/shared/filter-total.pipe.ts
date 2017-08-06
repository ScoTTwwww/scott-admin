import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'filterTotal'
})

export class FilterTotalPipe implements PipeTransform {
    constructor(
    ) { }

    transform(dataLists: Array<any>, item: string): any {

        const data = [];
        _.last(_.map(dataLists, (dataList) => {

            if (_.findIndex(data, function (O) { return O.item == dataList.item; }) < 0) {

                data.push({
                    'item': dataList.item,
                    'amount': dataList.amount,
                    'count': 1
                })
            } else {
                var a = _.findIndex(data, { 'item': dataList.item });
                _.assign(data[a], {
                    amount: _.add(data[a].amount, dataList.amount),
                    count: _.add(data[a].count, 1)
                });
            }
        }));

        var amountTotal = _.sumBy(data, function (o) { return o.amount; });
        var countTotal = _.sumBy(data, function (o) { return o.count; });

        _.last(_.map(data, (O) => {
            var a = _.findIndex(data, { 'item': O.item });
            _.assign(data[a], {
                total: amountTotal
            });
        }));

        //   console.log(dataLists)

        if (!item) {
            data.push({
                item: "all",
                amount: amountTotal,
                count: countTotal
            })
            return data
        } else {
            return _.filter(data, { item: item })
        }

    }
}
