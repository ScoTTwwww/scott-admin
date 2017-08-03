import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() filterItem: any;
  @Input() dataLists: any;
  @Output() filter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doClick(item) {
    this.filter.emit(item);
  }

  account(item?) {
    if (item) {
      var xxx = _.filter(this.dataLists, { item: item })
      return xxx.length
    }else {
      return this.dataLists.length
    }
  } 

}
