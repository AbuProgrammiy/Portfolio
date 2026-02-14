import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { StateService } from '../../core/services/state-service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  private readonly stateService = inject(StateService);

  protected showNavbar = computed(() => {
    return this.stateService.showNavbar();
  });
}
