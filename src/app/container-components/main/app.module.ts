// built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgForageModule} from 'ngforage';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// custom modules

// custom components
import { AppComponent } from './app.component';
import { LoginComponent } from '../../feature-components/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { SidebarComponent } from '../../shared-components/side-bar/sidebar.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';

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
    AppComponent, LoginComponent, DashboardComponent, DefaultComponent, HeaderComponent, SidebarComponent, FooterComponent, FilterPipe, DropdownDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgForageModule.forRoot()
  ],
  providers: [AuthGuard, LocalforageService, LocalforageconfigService, AppService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
    constructor(private lfConfig: LocalforageconfigService) {}
}
