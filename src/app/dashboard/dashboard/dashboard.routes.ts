import { Routes } from '@angular/router';
import { DashboardShell } from '../dashboard/dashboard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardShell,
    children: [
      {
        path: 'masters',
        loadChildren: () =>
          import('../masters/masters.routes').then(m => m.routes)
      },
    //   {
    //     path: 'transactions',
    //     loadChildren: () =>
    //       import('../transactions/transactions.routes').then(m => m.routes)
    //   },
    //   {
    //     path: 'reports',
    //     loadChildren: () =>
    //       import('../reports/reports.routes').then(m => m.routes)
    //   },
    //   {
    //     path: 'utilities',
    //     loadChildren: () =>
    //       import('../utilities/utilities.routes').then(m => m.routes)
    //   },
    //   {
    //     path: 'settings',
    //     loadChildren: () =>
    //       import('../settings/settings.routes').then(m => m.routes)
    //   },
      {
        path: '',
        redirectTo: 'masters/item',
        pathMatch: 'full'
      }
    ]
  }
];