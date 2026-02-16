import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StateService } from '../../core/services/state-service';
import { ApplyForm } from "./components/apply-form/apply-form";
import { Intro } from './components/intro/intro';
import { Overview } from "./components/overview/overview";
import { Skils } from "./components/skils/skils";
import { UserCard } from './components/user-card/user-card';

@Component({
  selector: 'app-main',
  imports: [Intro, UserCard, ApplyForm, Skils, Overview],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {
  private readonly stateService = inject(StateService);
  protected showIntro = computed(() => {
    return this.stateService.showIntro();
  });

  private intervalId?: number;
  private imageUrls = [
    'assets/user-pictures/user-microsoft.jpg',
    'assets/user-pictures/user-azimjon.jpg',
    'assets/user-pictures/user-devhub.jpg',
    'assets/user-pictures/user-dushamov.jpg',
    'assets/user-pictures/user-kasimov.jpg',
    'assets/user-pictures/user-umar.jpg',
    'assets/user-pictures/user-coworking.jpg',
    'assets/user-pictures/user-davron.jpg',
    'assets/user-pictures/user-coworking.jpg',
    'assets/user-pictures/user-panda.jpg',
  ];

  protected userPictureUrl = signal<string>(this.imageUrls[0]);
  protected fade = signal<boolean>(false);

  ngOnInit() {
    this.setImageChanger();
  }

  private setImageChanger() {
    const imageLength = this.imageUrls.length;
    let index: number = 0;

    this.intervalId = setInterval(() => {
      this.fade.set(true);

      setTimeout(() => {
        this.userPictureUrl.set(this.imageUrls[++index % imageLength]);
        setTimeout(() => {
          this.fade.set(false);
        }, 200);
      }, 200);
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
