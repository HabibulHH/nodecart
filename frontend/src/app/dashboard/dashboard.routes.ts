import { CheckoutComponent } from './../checkout/checkout.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../guards/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard], 
  },
  {
    path: 'checkout', component: CheckoutComponent,
    canActivate: [AuthGuard]
  }
];
