import {  Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import $ from 'jquery'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template: '<router-outlet></router-outlet>'
})
export class AppComponent  {

}
