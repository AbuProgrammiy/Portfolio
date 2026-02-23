import { Injectable, signal } from '@angular/core';
import { ProjectModel } from '../../features/projects/projects';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public projects = signal<ProjectModel[]>([
    {
      path: 'namoz-vaqtlari-api',
      name: 'Namoz Vaqtlari API',
      description: 'Provides data about pray times. Data includes all regions of Uzbekistan.',
      extendedDescription: `
  <p><strong>Namoz Vaqtlari API</strong> provides accurate daily Islamic prayer times for all regions of Uzbekistan.</p>

  <p>The API is designed to be simple, reliable, and easy to integrate into web, mobile, or backend applications.</p>

  <h4>Features</h4>
  <ul>
    <li>Region-based filtering</li>
    <li>Date-based filtering</li>
    <li>Request statistics</li>
    <li>Buy Me a Coffee support section</li>
  </ul>

  <h4>Use Cases</h4>
  <ul>
    <li>Islamic mobile applications</li>
    <li>Mosque display systems</li>
    <li>Reminder services</li>
    <li>Community platforms</li>
  </ul>
`,
      galleria: [
        {
          imageUrl: 'assets/projects/namoz-vaqtlari-api.jpg',
          thumbNailUrl: 'assets/projects/namoz-vaqtlari-api.jpg'
        },
        {
          imageUrl: 'assets/projects/namoz-vaqtlari-api-2.jpg',
          thumbNailUrl: 'assets/projects/namoz-vaqtlari-api-2.jpg'
        },
        {
          imageUrl: 'assets/projects/namoz-vaqtlari-api-3.jpg',
          thumbNailUrl: 'assets/projects/namoz-vaqtlari-api-3.jpg'
        },
        {
          imageUrl: 'assets/projects/namoz-vaqtlari-api-4.jpg',
          thumbNailUrl: 'assets/projects/namoz-vaqtlari-api-4.jpg'
        },
        {
          imageUrl: 'assets/projects/namoz-vaqtlari-api-5.jpg',
          thumbNailUrl: 'assets/projects/namoz-vaqtlari-api-5.jpg'
        },
      ],
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
      path: 'prayr-reminder-bot',
      name: 'PrayReminderBot',
      description:
        'A telegram bot which reminds pray times. Reminds pray times 5 times a day. Additionally it sends useful quotes also.',
      galleria: [
        {
          imageUrl: 'assets/projects/pray-reminder-bot.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-bot.jpg'
        }
      ],
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
      path: 'tarvooz',
      name: 'Tarvooz',
      description: "A Pet project about online shop. it\'s made for competition in Najot Ta'lim. And won 1-place",
      galleria: [
        {
          imageUrl: 'assets/projects/tarvooz.jpg',
          thumbNailUrl: 'assets/projects/tarvooz.jpg'
        }
      ],
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
