import {  Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeVlueioComponent } from './components/home-vlueio/home-vlueio.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, HomeVlueioComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // template: '<router-outlet></router-outlet>'
})
export class AppComponent  {

}
