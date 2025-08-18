import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-blog-article',
  imports: [RouterLink, NgClass],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css'
})
export class BlogArticleComponent {
  // Read article id from the URL

  articleContent: string | null = null;
  articleId: string | null = null;
  title: string | null = null; // Array of <h2> HTML strings
  date: string | null = null; // Date of the article
  text: string | null = null; // Array of <p> HTML strings

  loadingComplete = false;

  constructor(private route: ActivatedRoute) {

    console.log('BlogArticleComponent initialized');
    console.log('Environment:', environment);

    this.route.paramMap.subscribe(params => {
      console.log('Route parameters:', params);
      this.articleId = params.get('article_id');
      if (this.articleId) {
        console.log('Fetching article:', `${environment.apiBaseUrl}/assets/articles/${this.articleId}.html`);

        fetch('assets/articles/index.json').then(res => {
          console.log(res);
          return res.json();
        }).then(data => {
          
          const articleMeta = data.find((article: any) => article.link === this.articleId);
          if (articleMeta) {
            this.title = articleMeta.title;
            this.date = articleMeta.date;
            console.log('Article metadata found:', articleMeta);
          } else {
            console.error('Article metadata not found for ID:', this.articleId);
          }
        });

        fetch(`${environment.apiBaseUrl}/assets/articles/${this.articleId}.html`)
           .then(res => {
            console.log('Response status:', res.status);
            if (!res.ok) throw new Error(`Could not load article: ${this.articleId}`);
            console.log('Article content loaded successfully');
            return res.text();
          })
          .then(content => {
            console.log('Article content:', content);
            this.text = content;

            this.loadingComplete = true;
          });
      }
    });
  }
}
