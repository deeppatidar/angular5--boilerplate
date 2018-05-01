// built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModules } from 'ng-pro';
import { NgForageModule} from 'ngforage';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

// custom modules

// core components
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';

import { TransactionComponent } from '../transaction/transaction.component';
import { OperatorTransactionComponent } from '../operator-transaction/operator-transaction.component';
import { BrokerTransactionComponent } from '../broker-transaction/broker-transaction.component';
import { OneskyTransactionComponent } from '../onesky-transaction/onesky-transaction.component';


//shared components

import { CardComponent } from '../../shared-components/card/card.component';
import { TableComponent } from '../../shared-components/table/table.component';
import { ChartComponent } from '../../shared-components/chart/chart.component';


//feature components
import { HeaderComponent } from '../../feature-components/header/header.component';
import { FooterComponent } from '../../feature-components/footer/footer.component';
import { LoginComponent } from '../../feature-components/login/login.component';


// http services

import { AppService } from '../../services/http/app.service';
import { AuthenticationInterceptor } from "../../services/http/httpinterceptor";

//utils services
import { AuthGuard } from '../../services/utils/auth.guard.service';
import { LocalforageService } from '../../services/utils/localforage.service';
import { LoggingService } from '../../services/utils/logging.service';
import { GlobalErrorHandler } from '../../services/utils/error-handler';

//config services

import { LocalforageConfigService } from '../../services/config/localforageconfig.service';

//pipes
import { FilterPipe } from '../../pipes/filter.pipe';

//directives
import { DropdownDirective } from '../../directives/dropdown.directive';
import { TransactionTableComponent } from '../../shared-components/transaction-table/transaction-table.component';




@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, DefaultComponent , HeaderComponent, FooterComponent, FilterPipe, DropdownDirective, CardComponent, TableComponent, ChartComponent, OperatorTransactionComponent, BrokerTransactionComponent, OneskyTransactionComponent, TransactionComponent, TransactionTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MDBBootstrapModules.forRoot(),
    AppRoutingModule,
    NgForageModule.forRoot()
  ],
  providers: [
    AuthGuard,
    { provide: LocalforageService , useClass: LocalforageService },
     LocalforageConfigService, LoggingService, AppService, GlobalErrorHandler, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private lfConfig: LocalforageConfigService) {}
}
