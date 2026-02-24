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
      links: ['https://namoz-vaqtlari-api.more-info.uz/'],
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
      links: ['https://t.me/prayreminder_bot/'],
      description:
        'A telegram bot which reminds pray times. Reminds pray times 5 times a day. Additionally it sends useful quotes also.',
      extendedDescription: `<p><strong>PrayReminderBot</strong> is a Telegram bot that sends daily Islamic prayer time reminders five times a day for all regions of Uzbekistan.</p>

          <p>The bot is designed to help users stay consistent with their prayers by delivering accurate prayer times along with meaningful quotes to increase engagement and spiritual motivation.</p>

          <h4>Features</h4>
          <ul>
            <li>Five daily prayer time reminders</li>
            <li>Support for all regions of Uzbekistan</li>
            <li>Motivational quotes attached to reminders</li>
            <li>Telegram Mini App for adding and managing quotes</li>
            <li>Active user tracking and statistics</li>
          </ul>

          <h4>Statistics</h4>
          <ul>
            <li>Approximately 400 total users</li>
            <li>200 active users</li>
            <li>200 users who have blocked the bot</li>
          </ul>

          <h4>Use Cases</h4>
          <ul>
            <li>Daily personal prayer reminders</li>
            <li>Spiritual habit building</li>
            <li>Community engagement through quotes</li>
            <li>Islamic lifestyle support tools</li>
          </ul>`,
      galleria: [
        {
          imageUrl: 'assets/projects/pray-reminder.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-2.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-2.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-3.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-3.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-4.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-4.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-5.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-5.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-6.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-6.jpg'
        },
        {
          imageUrl: 'assets/projects/pray-reminder-7.jpg',
          thumbNailUrl: 'assets/projects/pray-reminder-7.jpg'
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
      path: 'tarvooz',
      name: 'Tarvooz',
      links: ['https://tarvooz.more-info.uz/'],
      description: "A Pet project about online shop. it\'s made for competition in Najot Ta'lim. And won 1-place",
      extendedDescription: `<p><strong>Tarvooz</strong> is an online shop web application developed as a pet project for a competition at Najot Ta'lim, where it achieved 1st place.</p>

<p>The project focuses on delivering a modern e-commerce experience with a clean, interactive, and soft UI design. It includes essential shopping functionality along with secure authentication features.</p>

<h4>Features</h4>
<ul>
  <li>Product listing page</li>
  <li>Product detailed view page</li>
  <li>User authentication (Sign In / Sign Up)</li>
  <li>Forgot password functionality with email support</li>
  <li>Search by product name and category</li>
  <li>Basket (cart) management logic</li>
  <li>Responsive and interactive user interface</li>
</ul>

<h4>Achievement</h4>
<ul>
  <li>1st place winner at Najot Ta'lim competition</li>
</ul>

<h4>Use Cases</h4>
<ul>
  <li>E-commerce learning platform</li>
  <li>Authentication system demonstration</li>
  <li>Search and filtering implementation example</li>
  <li>UI/UX design showcase</li>
</ul>`,
      galleria: [
        {
          imageUrl: 'assets/projects/tarvooz.jpg',
          thumbNailUrl: 'assets/projects/tarvooz.jpg'
        },
        {
          imageUrl: 'assets/projects/tarvooz-2.jpg',
          thumbNailUrl: 'assets/projects/tarvooz-2.jpg'
        },
        {
          imageUrl: 'assets/projects/tarvooz-3.jpg',
          thumbNailUrl: 'assets/projects/tarvooz-3.jpg'
        },
        {
          imageUrl: 'assets/projects/tarvooz-4.jpg',
          thumbNailUrl: 'assets/projects/tarvooz-4.jpg'
        },
        {
          imageUrl: 'assets/projects/tarvooz-5.jpg',
          thumbNailUrl: 'assets/projects/tarvooz-5.jpg'
        },
        {
          imageUrl: 'assets/projects/tarvooz-6.jpg',
          thumbNailUrl: 'assets/projects/tarvooz-6.jpg'
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
  ]);
}
