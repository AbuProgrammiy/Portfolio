import { Component } from '@angular/core';
import { Overview } from './components/overview/overview';
import { Skills } from './components/skils/skills';

@Component({
  selector: 'app-main',
  imports: [Skills, Overview],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
