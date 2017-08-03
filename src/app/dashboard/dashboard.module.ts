import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';
import { ListComponent } from './home/list/list.component';
import { FilterItemPipe } from './home/shared/filter-item.pipe';
import { ActionComponent } from './home/action/action.component';

import { HomeAction } from './home/shared/home.action';
import { HomeService } from './home/shared/home.service';
import { StoreModule } from '@ngrx/store'
import { HomeReducer } from '../dashboard/home/shared/home.reducer';


import { SharedModule } from '../shared';
const reducers = {
  home: HomeReducer,
};

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    NgxMyDatePickerModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    FilterItemPipe,
    ActionComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }
