import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { AppComponent } from './app.component';

import { LoginComponent } from './shared-components/login/login.component';
import { DashboardComponent } from './container-components/dashboard/dashboard.component';
import { DefaultComponent } from './container-components/default/default.component';



@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, DefaultComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
