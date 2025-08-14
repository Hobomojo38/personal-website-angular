import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-article',
  imports: [RouterLink],
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent {
  // Read article id from the URL

  screenWidth: number;

  articleContent: string | null = null;
  articleId: string | null = null;
  title: string | null = null; // Array of <h2> HTML strings
  date: string | null = null; // Date of the article
  text: string | null = null; // Array of <p> HTML strings

  loadingComplete = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.screenWidth = window.innerWidth;

    this.route.paramMap.subscribe(params => {
      this.articleId = params.get('id');
      if (this.articleId) {
        // Fetch the article content based on the articleId
        this.http.get(`/articles/${this.articleId}.html`, { responseType: 'text' })
          .subscribe(content => {
            this.articleContent = content;

            // Any additional initialization logic can go here
            this.title = this.extractByClass('page-title')[0]; // Array of <h2> HTML strings
            this.date = this.extractByTag('time')[0]; // Array of date strings
            this.text = this.extractByClass('page-body')[0]; // Array of <p> HTML strings

            console.log('Article Loaded:', this.articleId, this.title, this.date);

            this.loadingComplete = true;
          });
      }
    });
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
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.articleContent;
    const elements = tempDiv.querySelectorAll(`.${className}`);
    return Array.from(elements).map(el => el.innerHTML);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.screenWidth = window.innerWidth;
  }
}
