import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() sliderLists: any;
  form: FormGroup;
  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      amount1: new FormControl(0),
      amount2: new FormControl(0),
      amount3: new FormControl(0),
      amount4: new FormControl(0),
    });
  }

  ngOnChanges(changes: any) {
  }

  ngOnInit() {
  }

}
