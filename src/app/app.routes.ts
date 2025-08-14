import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogLandingPageComponent } from './blog-landing-page/blog-landing-page.component';
import { BlogArticleComponent } from './blog-landing-page/blog-article/blog-article.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'blog', component: BlogLandingPageComponent},
    { path: 'blog/:id', component: BlogArticleComponent },

    // { path:"**", component: ErrorComponent }, // For developing a 404 page, keep it last
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // scroll to top on nav
      anchorScrolling: 'enabled',           // support #anchor links
      onSameUrlNavigation: 'reload'         // re-run guards/resolvers on same route
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}