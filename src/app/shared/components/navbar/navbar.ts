import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected items = signal<NavbarItems[]>([
    {
      name: 'about',
      path: '',
    },
    {
      name: 'works',
      path: '',
    },
    {
      name: 'projects',
      path: '',
    },
  ]);

  protected menuItems: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Telegram',
          icon: PrimeIcons.TELEGRAM,
          command: () => {
            window.open('https://t.me/abuprogrammiy', '_blank');
          },
        },
        {
          label: 'Youtube',
          icon: PrimeIcons.YOUTUBE,
          command: () => {
            window.open('https://www.youtube.com/@abuprogrammiy', '_blank');
          },
        },
        {
          label: 'LinkedIn',
          icon: PrimeIcons.LINKEDIN,
          command: () => {
            window.open('https://www.linkedin.com/in/abu-programmiy-16b65b257', '_blank');
          },
        },
        {
          label: 'GitHub',
          icon: PrimeIcons.GITHUB,
          command: () => {
            window.open('https://github.com/abuProgrammiy', '_blank');
          },
        },
      ],
    },
  ];
}

export interface NavbarItems {
  name: string;
  path: string;
}
