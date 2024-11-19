import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeVlueioComponent } from '../../components/home-vlueio/home-vlueio.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeVlueioComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
