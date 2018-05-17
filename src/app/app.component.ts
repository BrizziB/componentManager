import { Component } from '@angular/core';
import { ComponentA} from './component.A';
import { ComponentB} from './component.B';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
