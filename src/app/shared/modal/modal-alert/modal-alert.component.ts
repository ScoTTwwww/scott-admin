import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {
  @Input() className: string;
  @ViewChild('modal') modal: ModalDirective;

  config: any = {
    title: 'modal.alert.title',
    message: '',
    confirmButtonText: 'modal.confirmButtonText',
  };
  
  private confirm_callback: any;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit() { }

  show(config: any, confirm_callback?: any) {
    if (typeof config == 'string') {
      this.config.message = config;
    } else {
      this.config = _.assign(this.config, config);
    }
    this.confirm_callback = confirm_callback;
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

}