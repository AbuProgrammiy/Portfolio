import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from 'primeng/toast';
import { StateService } from '../../core/services/state-service';
import { Navbar } from '../../shared/components/navbar/navbar';
import { UserCard } from "../../features/main/components/user-card/user-card";
import { ApplyForm } from "../../features/main/components/apply-form/apply-form";
import { Intro } from "../../features/main/components/intro/intro";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Toast, UserCard, ApplyForm, Intro],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  private readonly stateService = inject(StateService);

  protected showIntro = computed(() => {
    return !this.stateService.showIntro();
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
