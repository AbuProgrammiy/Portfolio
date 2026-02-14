import { Component, signal } from '@angular/core';
import { Intro } from "./components/intro/intro";

@Component({
  selector: 'app-main',
  imports: [Intro],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main  {
  protected showAnimation = signal<boolean>(true);


}
