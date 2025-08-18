import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';

  
  public showSocialBar = true;

  constructor() {
    console.log('AppComponent initialized');
    //print base-href
    console.log('Base Href:', document.baseURI);
  }

  toggleSocialBar() {
    this.showSocialBar = !this.showSocialBar;
  }
}
