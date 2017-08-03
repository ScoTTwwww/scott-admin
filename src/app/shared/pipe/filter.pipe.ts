import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(collection: _.List<any>, predicate?: _.ListIterator<any, boolean>): any {
    return _.filter(collection, predicate);
  }
}