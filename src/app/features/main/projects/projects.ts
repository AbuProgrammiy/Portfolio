import { Component, signal } from '@angular/core';
import { Skill } from '../components/skils/components/other-skills/other-skills';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected projects = signal<ProjectModel[]>([
    {
      name: 'Namoz Vaqtlari API',
      description: "O'zbekiston Respublikasi bo'yicha namoz vaqtlarini taqdim etuvhi API",
      pictureUrl: 'assets/projects/namoz-vaqtlari-api.jpg',
      usedSkills: [
        {
          name: '.Net',
          icon: 'assets/icons/dotnet.ico',
        },
        {
          name: 'Angular',
          icon: 'assets/icons/angular.ico',
        },
        {
          name: 'Vercel',
          icon: 'assets/icons/vercel.ico',
        },
        {
          name: 'Windows Server',
          icon: 'assets/icons/windows.ico',
        },
      ],
    },
  ]);
}

export interface ProjectModel {
  name?: string;
  description?: string;
  pictureUrl?: string;
  usedSkills?: Skill[];
}
