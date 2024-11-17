import {Routes} from "@angular/router";

/**
 * @author Bruno Ramirez
 */
export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'links-custom',
    loadComponent: () => import('./links-custom/links-custom.component').then(m => m.LinksCustomComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'links-preview',
    loadComponent: () => import('./links-preview/links-preview.component').then(m => m.LinksPreviewComponent)
  },
  {
    path: '',
    redirectTo: 'links-custom',
    pathMatch: 'full'
  },
];

