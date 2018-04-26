import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// core components
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from '../default/default.component';

import { TransactionComponent } from '../transaction/transaction.component';
import { OperatorTransactionComponent } from '../operator-transaction/operator-transaction.component';
import { BrokerTransactionComponent } from '../broker-transaction/broker-transaction.component';
import { OneskyTransactionComponent } from '../onesky-transaction/onesky-transaction.component';


//feature-components
import { LoginComponent } from '../../feature-components/login/login.component';

//shared-components
import { ChartComponent } from '../../shared-components/chart/chart.component';

//util service
import { AuthGuard } from '../../services/utils/auth.guard.service';

const routes: Routes = [
    //:TODO add route guard
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'app', component: DefaultComponent , children:
    [
      {path: '', component: DashboardComponent},
      {path: 'chart' , component: ChartComponent},
      {path: 'transaction', component: TransactionComponent , children:
        [
          {path: 'operator', component: OperatorTransactionComponent},
          {path: 'broker', component: BrokerTransactionComponent},
          {path: 'onesky', component: OneskyTransactionComponent},
          {path: '', redirectTo: 'operator', pathMatch: 'full'},
          {path: '**', redirectTo: 'operator'},
        ]
      }
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
