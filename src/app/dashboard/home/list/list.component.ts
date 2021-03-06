import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() dataLists: Array<any>;
  @Input() filterItem : any;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  doEdit(id) {
    // var dataListFindById = _.find(this.dataLists, { id: id });
    this.edit.emit(id)
  }
}
