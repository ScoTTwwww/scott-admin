import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import {StoreModule} from '@ngrx/store';
import { HomeReducer } from './dashboard/home/shared/home.reducer';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    
    
    
  ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
