import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor() { }

  public val = 14;

  @HostListener('document:scroll', ['$event']) // for window scroll events
  onScroll($event: Event) {
    console.log("scrolling");
  }

}
