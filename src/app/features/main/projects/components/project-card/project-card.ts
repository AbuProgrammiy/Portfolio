import { Component, input, signal } from '@angular/core';
import { ProjectModel } from '../../projects';
import { SkillCard } from "../../../../../shared/components/skill-card/skill-card";

@Component({
  selector: 'app-project-card',
  imports: [SkillCard],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  public item = input<ProjectModel>();
  public styleClass = input<string>();
}
