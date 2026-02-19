import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
  protected getCV() {
    window.open('https://resume.more-info.uz/assets/cv.pdf', 'blank');
  }
}
