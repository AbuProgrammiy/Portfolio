import { Component } from '@angular/core';
import { AngularFramework } from "./components/angular-framework/angular-framework";
import { DotNetFramework } from "./components/dot-net-framework/dot-net-framework";

@Component({
  selector: 'app-skils',
  imports: [AngularFramework, DotNetFramework],
  templateUrl: './skils.html',
  styleUrl: './skils.scss',
})
export class Skils {

}
