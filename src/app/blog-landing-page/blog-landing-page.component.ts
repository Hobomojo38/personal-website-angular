import { Component } from '@angular/core';
import { ArticleCardComponent } from './article-card/article-card.component';
import { HttpClient } from '@angular/common/http';
import { ArticleCardLargeComponent } from './article-card-large/article-card-large.component';
import { ArticleCardSmallComponent } from './article-card-small/article-card-small.component';


@Component({
  selector: 'app-blog-landing-page',
  imports: [ArticleCardComponent, ArticleCardLargeComponent, ArticleCardSmallComponent],
  templateUrl: './blog-landing-page.component.html',
  styleUrl: './blog-landing-page.component.css'
})
export class BlogLandingPageComponent {

  backgroundLength = 100;

  constructor(private http: HttpClient) { }

  articles: any[] = [];

  ngOnInit() {
    // Any additional initialization logic can go here
    this.http.get<any[]>('/articles/index.json').subscribe(files => {
      this.articles.push(...files);
      for (const article of this.articles) {
        console.log(article);
      }
    });
  }

}
