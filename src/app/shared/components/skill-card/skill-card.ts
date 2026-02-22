import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  public item = input<SkillCardModel>();
}

export interface SkillCardModel {
  name: string;
  icon: string;
  isIconImage?: boolean;
}
