import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-dot-net-framework',
  imports: [],
  templateUrl: './dot-net-framework.html',
  styleUrl: './dot-net-framework.scss',
})
export class DotNetFramework {
  protected experienceYear = computed(() => {
    const learnStartDate = new Date(2023, 12, 6); // March 3, 2024
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
    const learnStartDate = new Date(); // Never worked in real-life project
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
