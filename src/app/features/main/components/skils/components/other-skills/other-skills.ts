import { Component, signal } from '@angular/core';
import {
  SkillCard,
  SkillCardModel,
} from '../../../../../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-other-skills',
  imports: [SkillCard],
  templateUrl: './other-skills.html',
  styleUrl: './other-skills.scss',
})
export class OtherSkills {
  protected skills = signal<SkillCardModel[]>([
    {
      name: 'PostgreSQL',
      icon: 'assets/icons/postgresql.ico',
    },
    {
      name: 'PrimeNG',
      icon: 'assets/icons/primeng.png',
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/github.ico',
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/gitlab.ico',
    },
    {
      name: 'BitBucket',
      icon: 'assets/icons/bitbucket.ico',
    },
    {
      name: 'Windows Server',
      icon: 'assets/icons/windows.ico',
    },
    {
      name: 'Vercel',
      icon: 'assets/icons/vercel.ico',
    },
  ]);
}
