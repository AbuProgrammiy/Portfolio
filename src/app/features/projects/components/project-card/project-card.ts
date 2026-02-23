import { Component, input } from '@angular/core';
import { SkillCard } from "../../../../shared/components/skill-card/skill-card";
import { ProjectModel } from '../../projects';

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
