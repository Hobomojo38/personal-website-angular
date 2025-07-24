import { Component } from '@angular/core';
import { ExampleCardComponent } from "./example-card/example-card.component";

@Component({
  selector: 'app-blog-landing-page',
  imports: [ExampleCardComponent],
  templateUrl: './blog-landing-page.component.html',
  styleUrl: './blog-landing-page.component.css'
})
export class BlogLandingPageComponent {

  backgroundLength = 100;

}
