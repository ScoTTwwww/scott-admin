import { Injectable } from '@angular/core';
import { ToastsManager, Toast } from 'ng2-toastr';
import * as moment from 'moment';

@Injectable()
export class ToastService {

  constructor(
    public toastr: ToastsManager,
  ) { }

  success(message: string, title?: string, options?: any): Promise<Toast> {
    return this.toastr.success(message, this.setTime(title, options), options);
  }

  error(message: string, title?: string, options?: any): Promise<Toast> {
    return this.toastr.error(message, this.setTime(title, options), options);
  }

  warning(message: string, title?: string, options?: any): Promise<Toast> {
    return this.toastr.warning(message, this.setTime(title, options), options);
  }

  info(message: string, title?: string, options?: any): Promise<Toast> {
    return this.toastr.info(message, this.setTime(title, options), options);
  }

  custom(message: string, title?: string, options?: any): Promise<Toast> {
    return this.toastr.custom(message, this.setTime(title, options), options);
  }

  private setTime(title: string, options: any) {
    if (title) return title;
    if (options && options.dismiss == 'click') {
      return moment().format('YYYY-MM-DD HH:mm:ss');
    }
  }
}