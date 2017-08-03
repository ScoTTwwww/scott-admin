import { ResolvedReflectiveProvider } from '@angular/core';
import { Modal, FluentAssignMethod, extend } from 'angular2-modal';
import { BSMessageModal, MessageModalPresetBuilder, MessageModalPreset } from 'angular2-modal/plugins/bootstrap';

export interface ThreeButtonPreset extends MessageModalPreset {
  okBtn1: string;
  okBtn1Class: string;
  okBtn2: string;
  okBtn2Class: string;
  cancelBtn: string;
  cancelBtnClass: string;
}

/**
 * A Preset for a classic 3 button modal window.
 */
export class ThreeButtonPresetBuilder extends MessageModalPresetBuilder<ThreeButtonPreset> {
  okBtn1: FluentAssignMethod<string, this>;
  okBtn1Class: FluentAssignMethod<string, this>;
  okBtn2: FluentAssignMethod<string, this>;
  okBtn2Class: FluentAssignMethod<string, this>;
  cancelBtn: FluentAssignMethod<string, this>;
  cancelBtnClass: FluentAssignMethod<string, this>;

  constructor(modal: Modal, defaultValues: ThreeButtonPreset = undefined) {
    super(extend<any>({
      modal: modal,
      okBtn1: 'OK1',
      okBtn1Class: 'btn btn-primary',
      okBtn2: 'OK2',
      okBtn2Class: 'btn btn-primary',
      cancelBtn: 'OK',
      cancelBtnClass: 'btn btn-default',
    }, defaultValues || {}), [
      'okBtn1',
      'okBtn1Class',
      'okBtn2',
      'okBtn2Class',
      'cancelBtn',
      'cancelBtnClass',
    ]);
  }

  $$beforeOpen(config: ThreeButtonPreset): ResolvedReflectiveProvider[] {
    this.addButton(
      config.okBtn1Class,
      config.okBtn1,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.close(1)
    );
    this.addButton(
      config.okBtn2Class,
      config.okBtn2,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.close(2)
    );
    this.addButton(
      config.cancelBtnClass,
      config.cancelBtn,
      (cmp: BSMessageModal, $event: MouseEvent) => cmp.dialog.dismiss()
    );
    return super.$$beforeOpen(config);
  }
}