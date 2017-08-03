import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(collection: _.List<{}>, iteratees: any, orders?: boolean | string | (boolean | string)[]): any {
    return _.orderBy(collection, iteratees, orders);
  }
}