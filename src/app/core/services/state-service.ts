import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // private readonly _showNavbar = signal<boolean>(false);
  private readonly _showIntro = signal<boolean>(true);

  // public readonly showNavbar = this._showNavbar.asReadonly();
  public readonly showIntro = this._showIntro.asReadonly();

  // public setShowNavbar(show: boolean): void {
  //   this._showNavbar.set(show);
  // }

  public setShowIntro(show: boolean): void {
    this._showIntro.set(show);
  }
}
