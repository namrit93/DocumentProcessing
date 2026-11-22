import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './sign-in.component';
import { SignOutComponent } from './sign-out.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-out', component: SignOutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'sign-in' }
];
