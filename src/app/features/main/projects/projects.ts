import { Component, signal } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';
import { SkillCardModel } from '../../../shared/components/skill-card/skill-card';

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
      description: 'Provides data about pray times. Data includes all regions of Uzbekistan.',
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
        {
          name: 'Github',
          icon: 'assets/icons/github.ico',
        },
      ],
    },
    {
      name: 'PrayReminderBot',
      description:
        'A telegram bot which reminds pray times. Reminds pray times 5 times a day. Additionally it sends useful quotes also.',
      pictureUrl: 'assets/projects/pray-reminder-bot.jpg',
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
        {
          name: 'Github',
          icon: 'assets/icons/github.ico',
        },
      ],
    },
    {
      name: 'Tarvooz',
      description: "A Pet project about online shop. it\'s made for competition in Najot Ta'lim. And won 1-place",
      pictureUrl: 'assets/projects/tarvooz.jpg',
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
        {
          name: 'Github',
          icon: 'assets/icons/github.ico',
        },
      ],
    },
  ]);
}

export interface ProjectModel {
  name?: string;
  description?: string;
  pictureUrl?: string;
  usedSkills?: SkillCardModel[];
}
