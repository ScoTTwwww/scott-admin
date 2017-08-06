import { Injectable } from '@angular/core';
import { ContainerContent, DialogRef, overlayConfigFactory } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
 

import { Modal } from './presets';

import { ToastService } from './toast.service';

@Injectable()
export class ModalService {

  constructor(
    private modal: Modal,
 
    private toastService: ToastService,
  ) { }

  public alert(message: string, title?: string, options?: any): Promise<DialogRef<any>> {
    options = options || {};

    const okBtn: string = "確定";
    const okBtnClass: string = options.okBtnClass || 'btn btn-primary';

    return this.modal.alert()
      .message(message)
      .titleHtml('<h4>' + title + '</h4>')
      .okBtn(okBtn)
      .okBtnClass(okBtnClass)
      .open()
      .then(dialog => dialog.result)
      .catch(result => result);
  }

  public confirmSave(message: string = 'modal.confirm.save', title?: string, options?: any): Promise<DialogRef<any>> {
    return this.confirm(message, title, options);
  }

  public confirmDelete(message: string = 'modal.confirm.delete', title?: string, options?: any): Promise<DialogRef<any>> {
    return this.confirm(message, title, options);
  }

  public confirm(message: string, title?: string, options?: any): Promise<DialogRef<any>> {
     
    options = options || {};

    const okBtn: string = "確定";
    const okBtnClass: string = options.okBtnClass || 'btn btn-primary';
    const cancelBtn: string = "取消";
    const cancelBtnClass: string = options.cancelBtnClass || 'btn btn-default';

    return this.modal.confirm()
      .message(message)
      .titleHtml('<h4>' + title + '</h4>')
      .okBtn(okBtn)
      .okBtnClass(okBtnClass)
      .cancelBtn(cancelBtn)
      .cancelBtnClass(cancelBtnClass)
      .open()
      .then(dialog => dialog.result)
      .catch(result => result);
  }

 
  public open(content: ContainerContent, options: any): Promise<DialogRef<any>> {
    return this.modal.open(content, overlayConfigFactory(options, BSModalContext)).then((dialog) => {
      // dialog.onDestroy.subscribe(() => {
      //   dialog.overlay.isTopMost(dialog) && dialog.overlay.defaultViewContainer.clear();
      // });
      return dialog;
    });
  }

 

}
