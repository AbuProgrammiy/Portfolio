import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { BackArrow } from "../../../../shared/components/back-arrow/back-arrow";
import { SkillCard } from "../../../../shared/components/skill-card/skill-card";
import { DataService } from '../../../../shared/services/data-service';
import { ProjectModel } from '../../projects';

@Component({
  selector: 'app-project-preview',
  imports: [BackArrow, GalleriaModule, FormsModule, SkillCard],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.scss',
})
export class ProjectPreview implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly dataService = inject(DataService);
  private readonly destroyRef = inject(DestroyRef);

  protected path = signal<string | null>(null);
  protected project = signal<ProjectModel | null>(null);
  protected name = computed(() => {
    return this.project()?.name;
  });

  protected images = computed(() => {
    return this.project()?.galleria;
  });

  // stupid = model<any[]>([
  //   {
  //     imageUlr: 'https://media.wired.com/photos/63b8d0a771c6b526845f15a6/master/pass/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg',
  //     thumbanilUrl: 'https://media.wired.com/photos/63b8d0a771c6b526845f15a6/master/pass/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg',
  //   },
  //   {
  //     imageUlr: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480',
  //     thumbanilUrl: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Jaguar/F-Pace/10644/1755774688332/front-left-side-47.jpg?impolicy=resize&imwidth=480',
  //   },
  // ]);

  ngOnInit(): void {
    this.subscribeToParamMap();
  }

  private subscribeToParamMap() {
    this.activatedRoute.paramMap
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (params) => {
          const path = params.get('name');
          this.path.set(path);
          this.getProject();
        },
        error: () => {
          console.log('error in paramMap');
        }
      });
  };

  private getProject() {
    const path = this.path();
    const foundData = this.dataService.projects().find(x => x.path == path);

    if (!foundData) return;
    this.project.set(foundData);
  }
}

export interface GalleriaModel {
  imageUrl?: string,
  thumbNailUrl?: string,
}