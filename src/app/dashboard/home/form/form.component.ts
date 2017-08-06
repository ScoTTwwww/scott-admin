import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import createNumberMask from 'text-mask-addons/dist/createNumberMask.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: any;
  @Input() dataLists: any;
  @Input() dataList: any;
  @Output() save = new EventEmitter();

  private myOptions: INgxMyDpOptions = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
    dayLabels: { su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六' }
  };
  creditMask = createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: ','
  });
  form: FormGroup;
  constructor(private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      item: new FormControl(null, Validators.required),
      date: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if (!this.dataList) {
      this.dataList = {
        item: null,
        date: null,
        amount: null,
        text: null
      }
    }
  }
  
  setDate(): void {
    // Set today date using the setValue function
    let date = new Date();
    this.form.setValue({
      date: date
    });
  }

  clearDate(): void {
    // Clear the date using the setValue function
    this.form.setValue({ date: null });
  }

  clear() {
    this.form.reset();
  }

  doSave() {
     var ObjectAddId = _.assign({}, this.form.value, { id: this.dataListsNum() });
     var ArrayData = { dataList: ObjectAddId , id: this.dataList.id }
     this.save.emit(ArrayData);
  }

  dataListsNum() {
    //尋找陣列dataLists的Id值最大的
    //_.maxBy(this.dataLists,'id') 會找到最大Id的物件
    //那物件的Id + 1 回傳最大Id+1

    var findIndexById1 = _.findIndex(this.dataLists, function (O) { return O.id == 1; })
    if (findIndexById1 < 0) {
      return 1
    } else {
      return _.maxBy(this.dataLists, 'id').id + 1
    }

  }
}
