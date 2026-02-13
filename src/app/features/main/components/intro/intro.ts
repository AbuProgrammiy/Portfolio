import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro implements OnInit {
  protected nameClass = signal<string | null>(null);

  ngOnInit() {
    this.nameClass.set('fade-in');

    setTimeout(() => {
      this.nameClass.set('scale-increase');
    }, 1000);

    setTimeout(() => {
      this.nameClass.set('fade-out');
    }, 2000);

    setTimeout(() => {
      this.nameClass.set('end');
    }, 2010);
  }
}
