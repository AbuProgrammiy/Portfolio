import { Component, DestroyRef, inject, input, linkedSignal, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { WorkModel } from '../../../../shared/models/work.model';

@Component({
  selector: 'app-work-card',
  imports: [],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
})
export class WorkCard implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  public item = input<WorkModel>();
  protected baseIndexes = linkedSignal<number[]>(() => {
    const length = this.item()?.imageUrls?.length ?? 0;
    return Array.from({ length }, (_, i) => i);
  });
  protected rotationOffset = signal(0);

  ngOnInit() {
    this.setImageChanger();
  }

  private setImageChanger() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.rotationOffset.update(v => v + 1);
      });
  }
}
