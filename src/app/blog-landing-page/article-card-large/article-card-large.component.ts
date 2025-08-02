import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card-large',
  imports: [],
  templateUrl: './article-card-large.component.html',
  styleUrl: './article-card-large.component.css'
})
export class ArticleCardLargeComponent {
  @Input() article: any = {};
  
    title = '';
    date = '';
    blurb = '';
    image = '';
    link = '';
    
    ngOnInit() {
      this.title = this.article?.title;
      this.date = this.article?.date;
      this.blurb = this.article?.blurb.substring(0, 400) + '...'; // Limit to 300 characters
      this.image = this.article?.image;
      this.link = this.article?.link;
      // console.log('Article Large Card Initialized:', this.article, this.title);
    }
  
    navigateToArticle() {
      window.location.href = "blog/" + this.link;
    }
  
}
