import { Component, OnInit, Input, Output, EventEmitter, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

export const DATETIMEPICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatetimepickerComponent),
  multi: true
};

@Component({
  selector: 'app-datetimepicker',
  host: {
    '(document:click)': 'documentClick($event)',
  },
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css'],
  providers: [DATETIMEPICKER_CONTROL_VALUE_ACCESSOR]
})
export class DatetimepickerComponent implements OnInit, ControlValueAccessor {
  @Input() datetimeMode: string = 'date';
  @Input() placeholder: string;
  @Input() dateFormat: string = 'YYYY-MM-DD';

  //datepicker
  @Input() datepickerMode: string = 'day';
  @Input() activeDate: Date;
  @Input() initDate: Date;
  @Input() minDate: Date;
  @Input() maxDate: Date;
  @Input() minMode: string = 'day';
  @Input() maxMode: string = 'year';
  @Input() showWeeks: boolean = false;
  @Input() formatDay: string = 'D';
  @Input() formatMonth: string = 'MMM';
  @Input() formatYear: string = 'YYYY';
  @Input() formatDayHeader: string = 'dd';
  @Input() formatDayTitle: string = 'YYYY MMM';
  @Input() formatMonthTitle: string = 'YYYY';
  @Input() startingDay: number = 0;
  @Input() yearRange: number = 20;
  @Input() onlyCurrentMonth: boolean = false;
  @Input() shortcutPropagation: boolean = false;
  @Input() monthColLimit: number = 3;
  @Input() yearColLimit: number = 5;
  @Input() customClass: { date: Date, mode: string, clazz: string }[];
  @Input() dateDisabled: { date: Date, mode: string }[];

  @Output() selectionDone: EventEmitter<Date> = new EventEmitter<Date>(undefined);
  @Output() activeDateChange: EventEmitter<Date> = new EventEmitter<Date>(undefined);

  //timepicker
  @Input() arrowkeys: boolean = true;
  @Input() hourStep: number = 1;
  @Input() max: number;
  @Input() meridians: string[];
  @Input() min: number;
  @Input() minuteStep: number = 5;
  @Input() mousewheel: boolean = true;
  @Input() readonlyInput: boolean = false;
  @Input() showMeridian: boolean = false; //24h
  @Input() showSpinners: boolean = true;

  @HostListener('click', ['$event']) comonentClick(event: Event) {
    this.componentClicked = true;
  }

  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  date: Date;
  disabled: boolean = false;
  dropdownConfig: any = {
    isOpen: false,
    autoClose: false,
  };
  componentClicked: boolean = false;

  private _value: string = null;

  constructor() { }

  ngOnInit() {
  }

  onSelectionDone(event: Date): void {
    this.writeValue(event);
    this.isOpenChange(false);
    this.selectionDone.emit(event);
  }

  onActiveDateChange(event: Date): void {
    this.activeDateChange.emit(event);
  }

  get value(): string {
    return this._value;
  }
  set value(v: string) {
    if (v !== this._value) {
      this._value = v;

      const d = new Date(v);
      this.date = (moment(d).isValid()) ? d : new Date();

      this.onChange(v);
    }
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(v: any): void {
    if (v === this._value) {
      return;
    }
    if (v && v instanceof Date) {
      this.value = moment(v).format(this.dateFormat);
      return;
    }

    const m = moment(new Date(v));
    this.value = (v && m.isValid()) ? m.format(this.dateFormat) : v;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  today() {
    this.writeValue(new Date());
  }

  isOpenChange(event: boolean) {
    this.dropdownConfig.isOpen = event;
  }

  documentClick(event: Event) {
    if (!this.componentClicked) this.isOpenChange(false);
    this.componentClicked = false;
  }

}
