import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-list-total',
  templateUrl: './list-total.component.html',
  styleUrls: ['./list-total.component.css']
})
export class ListTotalComponent implements OnInit {
  @Input() dataLists: Array<any>;
  @Input() totalLists: Array<any>;
  @Input() sliderLists: Array<any>;
  @Input() filterItem: any;
  
  constructor() { }

  ngOnChanges(changes: any) {
  }

  ngOnInit() {
  }

  total(one, total) {
    return one / total
  }
}
