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

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxMyDatePickerModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    FormComponent,
    ListComponent
  ]
})
export class DashboardModule { }
