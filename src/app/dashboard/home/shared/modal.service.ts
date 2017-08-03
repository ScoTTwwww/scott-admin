import { Injectable } from '@angular/core';
import { ContainerContent, DialogRef, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Optional } from "@angular/core";

@Injectable()
export class ModalService {

  constructor(
    public modal: Modal,
    private translateService: TranslateService,
  ) { }

  public alert(message: string, title?: string, options?: any): Promise<DialogRef<any>> {
    message = this.translateService.instant(message);
    title = this.translateService.instant(title || 'modal.alert.title');
    options = options || {};

    const okBtn: string = this.translateService.instant(options.okBtn || 'modal.confirmButtonText');
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
    message = this.translateService.instant(message);
    title = this.translateService.instant(title || 'modal.confirm.title');
    options = options || {};

    const okBtn: string = this.translateService.instant(options.okBtn || 'modal.confirmButtonText');
    const okBtnClass: string = options.okBtnClass || 'btn btn-primary';
    const cancelBtn: string = this.translateService.instant(options.cancelBtn || 'modal.cancelButtonText');
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
    return this.modal.open(content, overlayConfigFactory(options, BSModalContext)).then((dialog: DialogRef<any>) => {
      return dialog;
    });
  }

  public prompt(body: string, title?: string, options?: any): Promise<DialogRef<any>> {
    body = this.translateService.instant(body);
    title = this.translateService.instant(title || 'modal.alert.title');
    options = options || {};

    const placeHolder = options.placeHolder ? this.translateService.instant(options.placeHolder) : null;
    const okBtn: string = this.translateService.instant(options.okBtn || 'modal.confirmButtonText');
    const okBtnClass: string = options.okBtnClass || 'btn btn-primary';
    const cancelBtn: string = this.translateService.instant(options.cancelBtn || 'modal.cancelButtonText');
    const cancelBtnClass: string = options.cancelBtnClass || 'btn btn-default';

    return this.modal.prompt()
      .titleHtml('<h4>' + title + '</h4>')
      .placeholder(placeHolder)
      .body(body)
      .okBtn(okBtn)
      .okBtnClass(okBtnClass)
      .cancelBtn(cancelBtn)
      .cancelBtnClass(cancelBtnClass)
      .open()
      .then(dialog => dialog.result)
      .catch(result => result);
  }

}
