import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StateService } from '../../../core/services/state-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
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
}

export interface NavbarItems {
  name: string;
  path: string;
}
