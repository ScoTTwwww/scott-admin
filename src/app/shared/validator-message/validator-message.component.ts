import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { CustomValidators } from './shared';

@Component({
  selector: 'app-validator-message',
  templateUrl: './validator-message.component.html',
  styleUrls: ['./validator-message.component.css']
})
export class ValidatorMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() message: string;

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit() {

  }

   get errorMessage() {
    let errors = [];

    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.invalid) {
        let errorMessage: string = CustomValidators.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        if (errorMessage == propertyName) errorMessage = this.translateService.instant(propertyName);
        errors.push(errorMessage);

        if (propertyName == 'required' && this.message) errors.push(this.message);
      }
    }

    return errors.length > 0 ? errors.join('，') : null;
  }

}
