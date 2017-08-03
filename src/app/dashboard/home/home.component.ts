import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }];
  data2 = [{ 1: '伙食費', 2: '住宿費' }];
  type = true;

  constructor() { }

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
      console.log(filterToStatus)
    } else {
      this.dataLists.push(data.dataList);
    }

  }

  edit(data) {
    var dataListFindById = _.find(this.dataLists, { id: data });
    this.dataList = dataListFindById;
    this.type = false;
  }

  delete(data) {
     var filterToStatus = _.findIndex(this.dataLists, (O) => { return O.id == data.id });
     
      this.dataLists.splice(filterToStatus,1);
  }
}
