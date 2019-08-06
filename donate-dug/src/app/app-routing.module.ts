import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './services/auth-guard-service.service';
import { GardenComponent } from './components/garden/garden.component';
import { PlotComponent } from './components/plot/plot.component';

const routes: Routes = [
  { path: 'garden', component: GardenComponent, canActivate:[AuthGuardService] },
  { path: 'plot', component: PlotComponent, canActivate:[AuthGuardService] },
  { path: 'auth/login', component: LoginFormComponent },
  { path: 'auth/register', component: RegisterFormComponent },
  { path: 'auth/logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
