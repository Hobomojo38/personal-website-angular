import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogLandingPageComponent } from './blog-landing-page/blog-landing-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'blog', component: BlogLandingPageComponent},
];
