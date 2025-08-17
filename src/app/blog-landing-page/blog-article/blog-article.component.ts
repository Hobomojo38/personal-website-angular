import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-article',
  imports: [RouterLink],
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

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('BlogArticleComponent initialized');
    console.log('Environment:', environment);

    this.route.paramMap.subscribe(params => {
      console.log('Route parameters:', params);
      this.articleId = params.get('article_id');
      if (this.articleId) {

        console.log('Fetching article:', `${environment.apiBaseUrl}/assets/articles/${this.articleId}.html`);

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

            // // Any additional initialization logic can go here
            // console.log('Extracting title from article HTML');
            // this.title = this.extractByClass('page-title')[0]; // Array of <h2> HTML strings
            // console.log('Extracting date from article HTML');
            // this.date = this.extractByTag('time')[0]; // Array of date strings
            // console.log('Extracting text from article HTML');
            // this.text = this.extractByClass('page-body')[0]; // Array of <p> HTML strings

            console.log('loading complete');
            debugger;

            this.loadingComplete = true;
          });
      }
    });
  }

  ngOnInit() {
    console.log("BlogArticleComponent initialized (ngOnInit)");
  }

  extractByTag(tagName: string): string[] {
    if (!this.articleContent) return [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.articleContent;
    const elements = tempDiv.querySelectorAll(tagName);
    return Array.from(elements).map(el => el.innerHTML);
  }

  extractByClass(className: string): string[] {
    if (!this.articleContent) return [];
    console.log("Creating temporary div for class extraction");
    const tempDiv = document.createElement('div');
    console.log("Setting innerHTML for temporary div");
    tempDiv.innerHTML = this.articleContent;
    console.log({"tempDiv.innerHTML": tempDiv.innerHTML})
    const elements = tempDiv.querySelectorAll(`.${className}`);
    console.log({"elements": elements})
    return Array.from(elements).map(el => el.innerHTML);
  }
}
