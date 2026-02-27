import { Routes } from '@angular/router';
import { Blogs } from './features/blogs/blogs';
import { Main } from './features/main/main';
import { ProjectPreview } from './features/projects/components/project-preview/project-preview';
import { Projects } from './features/projects/projects';
import { Works } from './features/works/works';
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
      },
      {
        path: "projects/preview/:name",
        component: ProjectPreview
      },
      {
        path: "blogs",
        component: Blogs
      },
      {
        path: "works",
        component: Works
      }
    ]
  }
];
