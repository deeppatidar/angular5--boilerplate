// built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgForageModule} from 'ngforage';

// custom modules

// custom components
import { AppComponent } from './app.component';
import { LoginComponent } from '../../feature-components/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';

// services
import { AuthGuard } from '../../services/utils/auth.guard.service';
import { LocalforageService } from '../../services/utils/localforage.service';
import { LocalforageconfigService } from '../../services/config/localforageconfig.service';
import { AppService } from '../../services/http/app.service';

//pipes
import { FilterPipe } from '../../pipes/filter.pipe';

//directives
import { DropdownDirective } from '../../directives/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, DefaultComponent, FilterPipe, DropdownDirective
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    NgForageModule.forRoot()
  ],
  providers: [AuthGuard, LocalforageService, LocalforageconfigService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private lfConfig: LocalforageconfigService) {}
}
