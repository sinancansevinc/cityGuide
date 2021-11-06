import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';

export const appRoutes:Routes = [
  { path: 'city', component: CityComponent },
  { path: '**', redirectTo: 'city', pathMatch: 'full' },
];
