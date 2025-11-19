import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
//import { AuthGuard } from './core/guards/auth.guard'; // ✅ Make sure this exists
//import { dashboardR } from '../dashboard/dashboard.routes'; // ✅ Import dashboard routes
import { dashboardRoutes } from './dashboard/dashboard/dashboard.routes';

export const authRoutes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword }
];

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', children: authRoutes },
  {
    path: 'dashboard',
  //  canActivate: [AuthGuard],
    children: dashboardRoutes
  },
  { path: '**', redirectTo: 'auth/login' }
];