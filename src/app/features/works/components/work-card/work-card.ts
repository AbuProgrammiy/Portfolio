import { DatePipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, input, linkedSignal, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { WorkModel } from '../../../../shared/models/work.model';

@Component({
  selector: 'app-work-card',
  imports: [
    DatePipe
  ],
  templateUrl: './work-card.html',
  styleUrl: './work-card.scss',
})
export class WorkCard implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  public item = input<WorkModel>();

  // length of images
  private imagesLength = computed(() => {
    return this.item()?.imageUrls?.length ?? 0;
  });

  // z-index order (0-based)
  protected imageIndexes = linkedSignal<number[]>(() => {
    return Array.from(
      { length: this.imagesLength() },
      (_, i) => i
    );
  });

  // which image is currently fading
  protected fadingIndex = signal<number | null>(null);

  ngOnInit() {
    this.setImageChanger();
  }

  private setImageChanger() {
    interval(5000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {

        const length = this.imagesLength();
        if (!length) return;

        const topZIndex = length - 1;

        // find which image is currently on top
        const currentIndexes = this.imageIndexes();
        const topImageIndex = currentIndexes.findIndex(
          z => z === topZIndex
        );

        // trigger fade
        this.fadingIndex.set(topImageIndex);

        // after animation duration (1s)
        setTimeout(() => {
          this.imageIndexes.update(indexes =>
            [...indexes.slice(1), indexes[0]]
          );

          this.fadingIndex.set(null);
        }, 1000);
      });
  }
}
