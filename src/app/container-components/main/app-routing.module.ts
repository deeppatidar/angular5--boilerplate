import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../feature-components/login/login.component';
import { AuthGuard } from '../../services/utils/auth.guard.service';
import { DefaultComponent } from '../default/default.component';

const routes: Routes = [
    //:TODO add route guard
  {path: '', redirectTo: 'login' , pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'default', component: DefaultComponent},
  {path: 'logout', redirectTo: 'login' },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
