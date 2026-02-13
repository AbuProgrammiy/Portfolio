import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Main
      }
    ]
  }
];
