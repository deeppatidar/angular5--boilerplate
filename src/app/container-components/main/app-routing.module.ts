import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../feature-components/login/login.component';
import { AuthGuard } from '../../services/utils/auth.guard.service';
import { DefaultComponent } from '../default/default.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChartComponent } from '../../shared-components/chart/chart.component';


const routes: Routes = [
    //:TODO add route guard
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: DefaultComponent , children:
    [
      {path: '', component: DashboardComponent},
      {path: 'chart' , component: ChartComponent}
    ]
  },
  {path: 'transaction', component: DefaultComponent , children:
    [
      {path: 'operator' , component: ChartComponent},
      {path: 'broker' , component: ChartComponent},
      {path: 'onesky' , component: ChartComponent},
      {path: '', redirectTo: 'operator', pathMatch: 'full'},
    ]
  },
  {path: 'logout', redirectTo: 'login' },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
