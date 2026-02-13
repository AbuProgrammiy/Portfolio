import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  protected items = signal<NavbarItems[]>([
    {
      name: "about",
      path: ''
    },
    {
      name: "works",
      path: ''
    },
    {
      name: "projects",
      path: ''
    },
  ]);

  protected showNavbar = signal<boolean>(false);

  ngOnInit() {
    setTimeout(() => {
      this.showNavbar.set(true);
    }, 2010);
  }
}

export interface NavbarItems {
  name: string,
  path: string;
}