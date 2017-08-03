import { Injectable, ResolvedReflectiveProvider as RRP } from '@angular/core';
import { Modal as Modal_ } from 'angular2-modal/plugins/bootstrap';

import { ThreeButtonPresetBuilder } from './three-button-preset';

@Injectable()
export class Modal extends Modal_ {

  confirm3(): ThreeButtonPresetBuilder {
    return new ThreeButtonPresetBuilder(this, <any>{isBlocking: true, keyboard: null});
  }

}