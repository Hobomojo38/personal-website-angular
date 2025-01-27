import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingPageComponent } from './blog-landing-page.component';

describe('BlogLandingPageComponent', () => {
  let component: BlogLandingPageComponent;
  let fixture: ComponentFixture<BlogLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
