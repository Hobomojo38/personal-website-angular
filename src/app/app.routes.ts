import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogLandingPageComponent } from './blog-landing-page/blog-landing-page.component';
import { BlogArticleComponent } from './blog-landing-page/blog-article/blog-article.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'blog', component: BlogLandingPageComponent},
    { path: 'blog/:id', component: BlogArticleComponent },
    // { path:"**", component: ErrorComponent }, // For developing a 404 page
];
