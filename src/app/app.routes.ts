import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogLandingPageComponent } from './blog-landing-page/blog-landing-page.component';
import { BlogArticleComponent } from './blog-landing-page/blog-article/blog-article.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'home', title: 'Max Zimmermann', component: HomePageComponent
  },
  {
    path: 'blog/:article_id', component: BlogArticleComponent
  },
  {
    path: 'blog', title: 'Max\'s Blog', component: BlogLandingPageComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

    //{ path:"**", component: HomePageComponent }, // For developing a 404 page, keep it last in this list
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, //For debugging
      useHash: true,
      scrollPositionRestoration: 'enabled', // scroll to top on nav
      anchorScrolling: 'enabled',           // support #anchor links
      onSameUrlNavigation: 'reload'         // re-run guards/resolvers on same route
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}