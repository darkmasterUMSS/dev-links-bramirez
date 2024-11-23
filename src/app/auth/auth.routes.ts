import {Routes} from "@angular/router";

/**
 * @author Bruno Ramirez
 */
export const AUTH_ROUTES: Routes = [
  {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  }
];
