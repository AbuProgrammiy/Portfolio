import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-angular-framework',
  imports: [],
  templateUrl: './angular-framework.html',
  styleUrl: './angular-framework.scss',
})
export class AngularFramework {

  protected skillKeys = signal([
    "forms",
    "signal",
    "rxJS",
    "primeNG",
    "primeFlex",
  ]);
  protected experienceYear = computed(() => {
    const learnStartDate = new Date(2024, 2, 3); // March 3, 2024
    const currentDate = new Date();

    let years = currentDate.getFullYear() - learnStartDate.getFullYear();
    let months = currentDate.getMonth() - learnStartDate.getMonth();
    let days = currentDate.getDate() - learnStartDate.getDate();

    // If month/day hasn't reached yet, subtract 1 year
    if (months < 0 || (months === 0 && days < 0)) {
      years -= 1;
      months += 12; // adjust months to be positive
    }

    // Now check if over 6 months to add '+'
    const halfYear = months >= 6;

    return halfYear ? `${years}+` : `${years}`;
  });

  protected experienceInRealProjects = computed(() => {
    const learnStartDate = new Date(2025, 3, 15); // April 15, 2025
    const currentDate = new Date();

    let years = currentDate.getFullYear() - learnStartDate.getFullYear();
    let months = currentDate.getMonth() - learnStartDate.getMonth();
    let days = currentDate.getDate() - learnStartDate.getDate();

    // If month/day hasn't reached yet, subtract 1 year
    if (months < 0 || (months === 0 && days < 0)) {
      years -= 1;
      months += 12; // adjust months to be positive
    }

    // Now check if over 6 months to add '+'
    const halfYear = months >= 6;

    return halfYear ? `${years}+` : `${years}`;
  });


}
