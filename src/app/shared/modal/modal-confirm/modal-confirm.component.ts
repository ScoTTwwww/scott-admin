import { Component, OnInit, Input, Output, EventEmitter, ViewChild, NgZone } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  @Input() className: string;
  @ViewChild('modal') modal: ModalDirective;  

  config: any = {
    title: 'modal.confirm.title',
    message: 'modal.confirm.save',
    confirmButtonText: 'modal.confirmButtonText',
    cancelButtonText: 'modal.cancelButtonText',
  };

  private confirm_callback: any;
  private cancel_callback: any;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit() {

  }

  show(config?: any, confirm_callback?: any, cancel_callback?: any) {
    this.confirm_callback = confirm_callback;
    this.cancel_callback = cancel_callback;
    switch (typeof config) {
      case 'string': {
        this.config.message = config;
        break;
      }
      case 'object': {
        this.config = _.assign(this.config, config);
        break;
      }
      case 'function': {
        this.confirm_callback = config;
        this.cancel_callback = confirm_callback;
        break;
      }
    }
    this.zone.run(() => {
      this.modal.show();
    });
  }

  hide() {
    this.zone.run(() => {
      this.modal.hide();
    });
  }

  confirm() {
    this.hide();
    this.confirm_callback && setTimeout(() => this.confirm_callback(), 500);
  }

  cancel() {
    this.hide();
    this.cancel_callback && setTimeout(() => this.cancel_callback(), 500);
  }

}