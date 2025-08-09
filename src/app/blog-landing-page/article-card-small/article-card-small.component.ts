import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-article-card-small',
  imports: [],
  templateUrl: './article-card-small.component.html',
  styleUrl: './article-card-small.component.css'
})
export class ArticleCardSmallComponent {
  @Input() article: any = {};
  
    title = '';
    date = '';
    blurb = '';
    image = '';
    link = '';

    constructor(private router: Router) {}

    ngOnInit() {
      this.title = this.article?.title;
      this.date = this.article?.date;
      this.blurb = this.article?.blurb;
      this.image = this.article?.image;
      this.link = this.article?.link;
      // console.log('Small Article Card Initialized:', this.article, this.title);
    }
  
    navigateToArticle() {
      this.router.navigate(['/blog', this.link]);
    }
}
