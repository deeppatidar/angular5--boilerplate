// built-in modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModules } from 'ng-pro';
import { NgForageModule} from 'ngforage';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

// custom modules

// custom components
import { AppComponent } from './app.component';
import { LoginComponent } from '../../feature-components/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';
import { HeaderComponent } from '../../feature-components/header/header.component';
import { FooterComponent } from '../../feature-components/footer/footer.component';

// services
import { AuthGuard } from '../../services/utils/auth.guard.service';
import { LocalforageService } from '../../services/utils/localforage.service';
import { LocalforageConfigService } from '../../services/config/localforageconfig.service';
import { AppService } from '../../services/http/app.service';

//pipes
import { FilterPipe } from '../../pipes/filter.pipe';

//directives
import { DropdownDirective } from '../../directives/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, DefaultComponent , HeaderComponent, FooterComponent, FilterPipe, DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MDBBootstrapModules.forRoot(),
    AppRoutingModule,
    NgForageModule.forRoot()
  ],
  providers: [
    AuthGuard,
    { provide: LocalforageService , useClass: LocalforageService },
     LocalforageConfigService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private lfConfig: LocalforageConfigService) {}
}
