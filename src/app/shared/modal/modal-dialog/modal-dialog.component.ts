import { Component, OnInit, Input, ViewChild, NgZone } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  @Input() config: any;
  @Input() select: any;
  @ViewChild('modal') modal: ModalDirective;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit() {
  }

  show() {
    this.zone.run(() => {
      this.modal.show();
    });
  }

  hide() {
    this.zone.run(() => {
      this.modal.hide();
    });
  }

}