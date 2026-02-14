import { Component, ElementRef, inject, output, signal, ViewChild } from '@angular/core';
import { StateService } from '../../../../core/services/state-service';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  @ViewChild('player') private player!: ElementRef<HTMLAudioElement>;

  private readonly stateService = inject(StateService);

  protected stopAnimation = output();
  protected nameClass = signal<string | null>(null);
  protected startTextClass = signal<string | null>(null);
  protected isUserInterackted = signal<boolean>(false);

  protected onUserClicked() {
    this.startTextClass.set('fade-out-fast');
    this.playAudio();

    setTimeout(() => {
      this.isUserInterackted.set(true);
      this.nameClass.set('fade-in');

      setTimeout(() => {
        this.nameClass.set('scale-increase-and-fade-out');

        setTimeout(() => {
          this.stopAnimation.emit();
          this.stateService.setShowNavbar(true);
        }, 1000);
      }, 1000);
    }, 300);
  }

  playAudio() {
    this.player.nativeElement.play();
  }
}
