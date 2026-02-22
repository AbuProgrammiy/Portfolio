import { Component, input, signal } from '@angular/core';
import { ProjectModel } from '../../projects';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  public item = input<ProjectModel>();
  public styleClass = input<string>();
}
