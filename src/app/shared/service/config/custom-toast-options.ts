import { ToastOptions } from 'ng2-toastr';

export class CustomToastOptions extends ToastOptions {
  
  constructor() {
    super();
    this.animate = 'flyRight';
    this.newestOnTop = true;
    this.maxShown = 10;
    this.enableHTML = true;
  }

}