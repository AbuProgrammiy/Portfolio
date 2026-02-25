import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  protected items = signal<NavbarItems[]>([
    {
      name: 'home',
      path: '',
    },
    {
      name: 'about',
      path: '',
    },
    {
      name: 'works',
      path: 'works',
    },
    {
      name: 'projects',
      path: 'projects',
    },
  ]);

  protected selectedItem = signal<string | null>(null);

  protected menuItems: MenuItem[] = [
    {
      label: 'Medias',
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

  ngOnInit(): void {
    const path = window.location.pathname;

    if (path == '/') {
      this.selectedItem.set('home');
    } else if (path.includes('projects')) {
      this.selectedItem.set('projects');
    } else {
      this.selectedItem.set(null);
    }
  }
}

export interface NavbarItems {
  name: string;
  path: string;
}
