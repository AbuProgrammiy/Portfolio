import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _showNavbar = signal<boolean>(false);

  public readonly showNavbar = this._showNavbar.asReadonly();

  public setShowNavbar(show: boolean): void {
    this._showNavbar.set(show);
  }
}
