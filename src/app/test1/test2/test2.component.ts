import { Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  imports: [],
  templateUrl: './test2.component.html',
})
export class Test2Component {
  id: number | null = null;

  

  constructor(private route: ActivatedRoute) {
    console.log('Test2Component initialized');

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('Route parameter id:', this.id);
    });
  }
}
