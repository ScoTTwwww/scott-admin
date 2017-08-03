import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { HomeService } from './shared/home.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastService } from '../../shared/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataLists$: Observable<any>;

  data = [{ 'item': '伙食費' },
  { 'item': '住宿費' },
  { 'item': '交通費' },
  { 'item': '娛樂費' }]
  dataList = null;
  dataLists = [{
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
  ];
  filterItem = null;
  data2 = [{ 1: '伙食費', 2: '住宿費' }];
  type = true;

  constructor(
    private toastr_original: ToastsManager,
    private toastService: ToastService,
    private vRef: ViewContainerRef
  ) {
    this.toastr_original.setRootViewContainerRef(vRef);
  }

  ngOnInit() {
  }

  change() {
    this.dataList = null;
    return this.type = !this.type
  }

  save(data) {
    this.type = true;
    var filterToStatus = _.findIndex(this.dataLists, (O) => { return O.id == data.id });


    if (data.id) {
      this.dataLists[filterToStatus] = data.dataList;
      setTimeout(this.toastService.success('編輯成功!'), 1000)
      console.log(filterToStatus)
    } else {
      this.dataLists.push(data.dataList);
      setTimeout(this.toastService.success('新增成功!'), 1000)
    }

  }

  edit(data) {
    var dataListFindById = _.find(this.dataLists, { id: data });
    this.dataList = dataListFindById;
    this.type = false;
  }

  delete(id) {
    //var filterToStatus = _.findIndex(this.dataLists, (O) => { return O.id == id });
    _.remove(this.dataLists, function (n) {
      return n.id == id;
    });

    //  this.dataLists.splice(filterToStatus,1);
  }

  filter(item) {
    this.filterItem = item;
  }
}
