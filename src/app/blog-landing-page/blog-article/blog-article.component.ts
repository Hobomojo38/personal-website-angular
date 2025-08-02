import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-article',
  imports: [],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css'
})
export class BlogArticleComponent {
  // Read article id from the URL

  articleId: string | null = null;
  title: string | null = null; // Array of <h2> HTML strings
  date: string | null = null; // Date of the article

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe(params => {
      this.articleId = params.get('id');
      if (this.articleId) {
        // Fetch the article content based on the articleId
        this.http.get(`/articles/${this.articleId}.html`, { responseType: 'text' })
          .subscribe(content => {
            this.articleContent = content;
          });
      }
    });
  }

  articleContent: string | null = null;

  ngOnInit() {
    // Any additional initialization logic can go here
    this.title = this.extractByClass('page-title')[0]; // Array of <h2> HTML strings
    this.date = this.extractByTag('time')[0]?.substring(1); // Array of date strings
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

  
}
