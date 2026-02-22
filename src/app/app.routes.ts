import { Routes } from '@angular/router';
import { Main } from './features/main/main';
import { MainLayout } from './layout/main-layout/main-layout';
import { Projects } from './features/main/projects/projects';

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
