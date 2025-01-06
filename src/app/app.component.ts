import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, SocialSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';

  public viewSideParallax = false;
  public showSocialBar = true;

  toggleSideParallax() {
    this.viewSideParallax = !this.viewSideParallax;
  }

  toggleSocialBar() {
    this.showSocialBar = !this.showSocialBar;
  }
}
