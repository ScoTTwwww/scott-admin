import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqBy'
})
export class UniqByPipe implements PipeTransform {
  transform(value: any, arg: string): any {
    return _.uniqBy(value, arg);
  }
}