import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-arrow',
  imports: [],
  templateUrl: './back-arrow.html',
  styleUrl: './back-arrow.scss',
})
export class BackArrow {

  private readonly router = inject(Router);
  public route = input<string>();

  protected navigate() {
    this.router.navigate([this.route()]);
  }
}
