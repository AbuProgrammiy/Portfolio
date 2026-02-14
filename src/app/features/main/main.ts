import { Component, signal } from '@angular/core';
import { Intro } from "./components/intro/intro";
import { UserCard } from "./components/user-card/user-card";

@Component({
  selector: 'app-main',
  imports: [Intro, UserCard],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main  {
  protected showAnimation = signal<boolean>(true);
  protected userPictureUrl=signal<string>('./assets/user-pictures/user-microsoft.jpg')
}
