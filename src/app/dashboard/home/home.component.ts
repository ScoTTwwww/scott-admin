import { Component, OnInit, ViewContainerRef } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

import { HomeService } from './shared/home.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastService, ModalService } from '../../shared/';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataLists$: Observable<Array<any>>;
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
    private vRef: ViewContainerRef,
    public modalService: ModalService,
    private homeService: HomeService
  ) {
    this.toastr_original.setRootViewContainerRef(vRef);
    this.dataLists$ = this.homeService.dataLists$;
  }

  ngOnInit() {

  }

  change() {
    this.dataList = null;
    return this.type = !this.type
  }

  save(data) {
    this.modalService.confirm('是否確定儲存？', "訊息").then((result) => {
      if (result) {
        this.type = true;
        if (data.id) {
          var newDataList = _.assign({}, data.dataList, {
            id: data.id
          });
          this.homeService.edit(newDataList);
          this.toastService.success("編輯成功!")
        } else {
          // this.dataLists.push(data.dataList);
          this.homeService.create(data.dataList);
          this.toastService.success("新增成功!")
        }
      }
    });



  }

  edit(data) {
    var dataListFindById = _.find(this.dataLists, { id: data });
    this.dataList = dataListFindById;
    this.type = false;
  }

  delete(id) {
    //var filterToStatus = _.findIndex(this.dataLists, (O) => { return O.id == id });
    /*     _.remove(this.dataLists, function (n) {
          return n.id == id;
        });
     */

    this.modalService.confirm('是否確定刪除？', "訊息").then((result) => {
      if (result) {
        this.homeService.delete(id);
        this.toastService.success("刪除成功!")
      }
    });

    //  this.dataLists.splice(filterToStatus,1);
  }

  filter(item) {
    this.filterItem = item;
  }
}
