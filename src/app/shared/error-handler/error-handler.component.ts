import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { ModalService } from '../service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit, OnChanges {
  @Input() error: any;

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnChanges(changes: any) {
    if (changes.error && !changes.error.firstChange && changes.error.currentValue) {
      if (this.error && this.error.status == 400 && typeof this.error._body == 'string') {
        switch (this.error._body) {
          default: {
            setTimeout(() => {
              this.modalService.alert(this.error._body);
            }, 1);
            break;
          }
        }
      } else {
        //this.modalService.alert('system.errors.systemError');
      }
    }
  }

  ngOnInit() {

  }

}
