import { Component, inject, OnInit, signal } from '@angular/core';
import { WorkModel } from '../../shared/models/work.model';
import { DataService } from '../../shared/services/data-service';
import { WorkCard } from "./components/work-card/work-card";

@Component({
  selector: 'app-works',
  imports: [WorkCard],
  templateUrl: './works.html',
  styleUrl: './works.scss',
})
export class Works implements OnInit {
  private readonly dataService = inject(DataService);

  protected works = signal<WorkModel[]>([]);

  ngOnInit() {
    this.works.set(this.dataService.works());
  }
}
