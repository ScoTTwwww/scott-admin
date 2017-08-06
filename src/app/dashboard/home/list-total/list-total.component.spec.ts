import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTotalComponent } from './list-total.component';

describe('ListTotalComponent', () => {
  let component: ListTotalComponent;
  let fixture: ComponentFixture<ListTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
