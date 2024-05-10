import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'nutrition',
    loadComponent: () => import('./nutrition/nutrition.page').then( m => m.NutritionPage)
  },
];
