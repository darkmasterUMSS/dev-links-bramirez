import {Routes} from "@angular/router";

/**
 * @author Bruno Ramirez
 */
export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'links-custom',
    loadComponent: () => import('./components/links-custom/links-custom.component').then(m => m.LinksCustomComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'links-preview',
    loadComponent: () => import('./components/links-preview/links-preview.component').then(m => m.LinksPreviewComponent)
  },
  {
    path: '',
    redirectTo: 'links-custom',
    pathMatch: 'full'
  },
];

