import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageUtils } from 'src/utils/language.utils';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  public currentLang: string = 'en';
  public textColor : string = 'black'

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
    this.currentLang = LanguageUtils.getLanguage(window)
    var href_ = window.location.pathname.split('/')[1]
   
    if(this.currentLang != href_ && href_ != "" ) {
      
      
      LanguageUtils.setLanguage(window, href_);
      var new_route_2 = window.location.href.replace(`/${this.currentLang}/`,`/${href_}/` )

      window.location.href = new_route_2


    }else
    {
    LanguageUtils.setLanguage(window, this.currentLang);
    this.changeNavColor(window.location.pathname.split('/')[2]? window.location.pathname.split('/')[2]: '')}

  }


  private dropdown_menu_stat = "closed"
  public openmenu(dropdown_menu: HTMLElement): void {
    if (this.dropdown_menu_stat == "closed") { dropdown_menu.style.display = 'block'; this.dropdown_menu_stat = "opened" }
    else { dropdown_menu.style.display = 'none'; this.dropdown_menu_stat = "closed" }


    console.log('open menu' + dropdown_menu.style)
  }


  changeLanguage(lang: string): void {
    LanguageUtils.setLanguage(window, lang);
    const new_route = `/${lang}${this.router.url}`
    // console.log('++ new route ' + new_route)
    window.location.href = new_route




  }
  
  
  public changepage(route: string): void {
    this.router.navigate([`/${route}`]);
    this.changeNavColor(route)
    
  }
  public changeNavColor(route: string): void {
    // console.log(`change color for route ${route}`)
    if(route === ''){
      this.textColor = 'black'
     }
    else if (route=== 'vlueio'){
      this.textColor = 'white'
    }


  }


}
