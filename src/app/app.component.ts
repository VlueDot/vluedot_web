import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeVlueioComponent } from './components/home-vlueio/home-vlueio.component';
import { LanguageUtils } from '../utils/language.utils';
import { After } from 'v8';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, HomeVlueioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // template: '<router-outlet></router-outlet>'
})

export class AppComponent implements OnInit, AfterViewInit {

  private currentLang = ''
  constructor(
    private router: Router) { }
  ngOnInit(): void {
    this.currentLang = LanguageUtils.getLanguage(window)
    if (this.currentLang === 'es') {


      // console.log("&&&&", this.currentLang, window.location.pathname.split('/')[1])
      if (this.currentLang !== window.location.pathname.split('/')[1]) {

        const new_route = `/${this.currentLang}${this.router.url}`
        console.log("new_route", new_route)
        window.location.href = new_route


      }





    }


  }

  ngAfterViewInit(): void {



  }


}



