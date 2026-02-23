import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { SkillCard } from "../../../../shared/components/skill-card/skill-card";
import { ProjectModel } from '../../projects';

@Component({
  selector: 'app-project-card',
  imports: [SkillCard],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  private readonly router = inject(Router);
  public item = input<ProjectModel>();
  public styleClass = input<string>();

  protected navigate() {
    const path = this.item()?.path;

    if (!path) return;

    this.router.navigate(['projects/preview', path]);
  }
}
