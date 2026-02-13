import { Component, OnInit, signal } from '@angular/core';
import { Intro } from "./components/intro/intro";

@Component({
  selector: 'app-main',
  imports: [Intro],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  protected showAnimation = signal<boolean>(true);

  ngOnInit() {
    setTimeout(() => {

      this.showAnimation.set(false);
    }, 2010);
  }
}
