import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private appComponent: AppComponent, private router: Router) {} 

  
  openBlog() {
    this.router.navigate(['/blog']);
  }
}

// public temp() {
//   this.appComponent.toggleSocialBar();
// }

// public viewSideParallax = false;

// toggleSideParallax() {
//   this.viewSideParallax = !this.viewSideParallax;
// }


