import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardLargeComponent } from './article-card-large.component';

describe('ArticleCardLargeComponent', () => {
  let component: ArticleCardLargeComponent;
  let fixture: ComponentFixture<ArticleCardLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardLargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
