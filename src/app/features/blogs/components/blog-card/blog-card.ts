import { Component, input } from '@angular/core';
import { BlogModel } from '../../../../shared/models/blog.model';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCard {
  public item = input<BlogModel>();

  protected navigate() {
    window.open(this.item()?.link, 'target');
  }
}
