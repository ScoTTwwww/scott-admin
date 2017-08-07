import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
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
  dataList$: Observable<any>;
  sliderLists$: Observable<any>;
  totalLists$: Observable<any>;
  type$: Observable<any>;
  @ViewChild('templateRef') templateRef: TemplateRef<any>;

  data = [{ 'item': '伙食費' },
  { 'item': '住宿費' },
  { 'item': '交通費' },
  { 'item': '娛樂費' }]
  dataList = null;
  totalLists;
  filterItem = null;
  data2 = [{ 1: '伙食費', 2: '住宿費' }]
  dialogRef: any;

  constructor(
    private toastr_original: ToastsManager,
    private toastService: ToastService,
    private vRef: ViewContainerRef,
    public modalService: ModalService,
    private homeService: HomeService
  ) {
    this.toastr_original.setRootViewContainerRef(vRef);
    this.dataLists$ = this.homeService.dataLists$;
    this.dataList$ = this.homeService.dataList$;
    this.sliderLists$ = this.homeService.sliderLists$;
    this.totalLists$ = this.homeService.totalLists$;
    this.type$ = this.homeService.type$;
  }

  ngOnInit() {
    this.dataLists$.take(1).subscribe((dataList) => {
      this.homeService.totalLists(this.totals(dataList));
    })
  }

  change(type) {
  
      this.homeService.clearForm();
    this.type(type);
  }

  save(data) {
    this.modalService.confirm('是否確定儲存？', "訊息").then((result) => {
      if (result) {
        this.type("back");
        if (data.id) {
          var newDataList = _.assign({}, data.dataList, {
            id: data.id
          });
          this.homeService.edit(newDataList);
          this.dataLists$.take(1).subscribe((dataList) => {
            this.homeService.totalLists(this.totals(dataList));
          })
          this.toastService.success("編輯成功!")
        } else {
          // this.dataLists.push(data.dataList);
          this.homeService.create(data.dataList);
          this.dataLists$.take(1).subscribe((dataList) => {
            this.homeService.totalLists(this.totals(dataList));
          })
          this.toastService.success("新增成功!")
        }
      }
    });
  }

  edit(id) {
    //var dataListFindById = _.find(this.dataLists, { id: data });
    this.homeService.listEdit(id);
    // this.dataList = dataListFindById;
    this.type("edit");
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
        this.dataLists$.take(1).subscribe((dataList) => {
          this.homeService.totalLists(this.totals(dataList));
        })
        this.toastService.success("刪除成功!")
      }
    });
    //  this.dataLists.splice(filterToStatus,1);
  }

  filter(item) {
    this.filterItem = item;
  }

  fn() {
    //this.modalService.alert("施工中", "訊息")
    this.modalService.open(this.templateRef, { isBlocking: false, dialogClass: 'modal-dialog' }).then(dialog => {
      this.dialogRef = dialog;
    });
  }

  totals(dataLists) {
    const data = [];
    const total = { amount1: 0, amount2: 0, amount3: 0, amount4: 0 };

    _.last(_.map(dataLists, (dataList) => {
      if (_.findIndex(data, function (O) { return O.item == dataList.item; }) < 0) {

        switch (dataList.item) {
          case '伙食費': {
            total.amount1 += dataList.amount;
            break;
          }
          case '住宿費': {
            total.amount2 += dataList.amount;
            break;
          }
          case '交通費': {
            total.amount3 += dataList.amount;
            break;
          }
          case '娛樂費': {
            total.amount4 += dataList.amount;
            break;
          }
        }
      }
    }));
    return total
  }

  type(type) {
    //this.type$.take(1).subscribe(type=> type);
    this.homeService.type(type);
  }
}
