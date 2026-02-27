import { Component, inject, signal } from '@angular/core';
import { BlogModel } from '../../shared/models/blog.model';
import { DataService } from '../../shared/services/data-service';
import { BlogCard } from "./components/blog-card/blog-card";

@Component({
  selector: 'app-blogs',
  imports: [BlogCard],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
  private readonly dataService = inject(DataService);
  protected blogs = signal<BlogModel[]>(this.dataService.blogs());
}
