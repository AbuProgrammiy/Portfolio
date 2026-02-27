import { DatePipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, input, linkedSignal, OnInit } from '@angular/core';
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
  private imagesLength = computed(() => {
    return this.item()?.imageUrls?.length ?? 0;
  });
  protected imageIndexes = linkedSignal<number[]>(() => {
    const indexses: number[] = [];

    for (let i = 1; i <= this.imagesLength(); i++) {
      indexses.push(i);
    }
    return indexses;
  });

  protected fadeOutIndex = linkedSignal<number[]>(() => {
    const indexses: number[] = [];

    for (let i = 1; i <= this.imagesLength(); i++) {
      indexses.push(i);
    }
    return indexses;
  });

  ngOnInit() {
    this.setImageChanger();
  }

  private setImageChanger() {
    interval(7000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.fadeOutIndex.update(indexses => {
          return [...indexses.slice(1), indexses[0]];
        });

        setTimeout(() => {
          this.imageIndexes.update(indexses => {
            return [...indexses.slice(1), indexses[0]];
          });
        }, 1000);
      });
  }

  protected fadeOut(index: number): boolean {
    return this.fadeOutIndex()?.[index] == this.fadeOutIndex().length - 1;
  }
}
