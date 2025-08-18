import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-test1',
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.css'
})
export class Test1Component {

  constructor(private router: Router) {
    console.log('Test1Component initialized');
  }

  nav(id: number) {
    this.router.navigate(['/test', id]);
  }

}
