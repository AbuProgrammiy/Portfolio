import { Component } from '@angular/core';
import { AngularFramework } from "./components/angular-framework/angular-framework";
import { DotNetFramework } from "./components/dot-net-framework/dot-net-framework";
import { OtherSkills } from './components/other-skills/other-skills';

@Component({
  selector: 'app-skils',
  imports: [AngularFramework, DotNetFramework, OtherSkills],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

}
