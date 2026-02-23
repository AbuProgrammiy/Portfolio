import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { Projects } from './features/projects/projects';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Main
      },
      {
        path: 'projects',
        component: Projects
      }
    ]
  }
];
