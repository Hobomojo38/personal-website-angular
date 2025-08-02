import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() article: any = {};

  title = '';
  date = '';
  blurb = '';
  image = '';
  link = '';
  
  ngOnInit() {
    this.title = this.article?.title;
    this.date = this.article?.date;
    this.blurb = this.article?.blurb;
    this.image = this.article?.image;
    this.link = this.article?.link;
    // console.log('Article Card Initialized:', this.article, this.title);
  }

  navigateToArticle() {
    window.location.href = "blog/" + this.link;
  }

}
