import { Component, computed, inject } from '@angular/core';
import { SkillCardModel } from '../../shared/components/skill-card/skill-card';
import { DataService } from '../../shared/services/data-service';
import { ProjectCard } from './components/project-card/project-card';
import { GalleriaModel } from './components/project-preview/project-preview';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly dataService = inject(DataService);
  protected projects = computed(() => {
    return this.dataService.projects();
  });
}

export interface ProjectModel {
  path?: string;
  name?: string;
  description?: string;
  extendedDescription?: string;
  galleria?: GalleriaModel[];
  usedSkills?: SkillCardModel[];
  links?: string[];
}
