import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[caretPosition]'
})
export class CaretPositionDirective {

  constructor(
    private elementRef: ElementRef,
  ) { }

  @HostListener('keyup') onkeyup() {
    const value = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.selectionStart = value.length;
    this.elementRef.nativeElement.selectionEnd = value.length;
  }

}
