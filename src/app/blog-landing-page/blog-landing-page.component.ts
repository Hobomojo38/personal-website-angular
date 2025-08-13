import { Component, HostListener  } from '@angular/core';
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

  screenHeight: number;
  screenWidth: number;
  articles: any[] = [];

  constructor(private http: HttpClient) { 
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {
    // Any additional initialization logic can go here
    this.http.get<any[]>('/articles/index.json').subscribe(files => {
      this.articles.push(...files);
      //console.log('Articles loaded:', this.articles[0]);
    });
    
  }

}
