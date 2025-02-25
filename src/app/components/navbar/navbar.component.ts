import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageUtils } from 'src/utils/language.utils';
import { CommonModule } from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit,AfterViewInit {

  public currentLang: string = 'en';
  public textColor : string = 'black'

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
    this.currentLang = LanguageUtils.getLanguage(window)
    var href_ = window.location.pathname.split('/')[1]
    var actualroute = window.location.pathname.split('/')[2]
    console.log("actualroute: ", actualroute)
    this.hidelink(actualroute)
    

   
    if(this.currentLang != href_ && href_ != "" ) {
      
      
      LanguageUtils.setLanguage(window, href_);
      var new_route_2 = window.location.href.replace(`/${this.currentLang}/`,`/${href_}/` )

      window.location.href = new_route_2


    }else
    {
    LanguageUtils.setLanguage(window, this.currentLang);
    this.changeNavColor(window.location.pathname.split('/')[2]? window.location.pathname.split('/')[2]: '')}

  }

  ngAfterViewInit(): void {

    this.currentLang = LanguageUtils.getLanguage(window)
    var href_ = window.location.pathname.split('/')[1]
    if(href_=='veep'){

      this.changeNavColor('veep')
    }
    
  }


  private dropdown_menu_stat = "closed"
  public openmenu(dropdown_menu: HTMLElement, bcktggle: HTMLElement): void {
    if (this.dropdown_menu_stat == "closed") { 
      dropdown_menu.style.display = 'block'; this.dropdown_menu_stat = "opened" ; bcktggle.style.display = 'block'
    
    }
    else { dropdown_menu.style.display = 'none'; this.dropdown_menu_stat = "closed"; bcktggle.style.display = 'none' }


    console.log('open menu' + dropdown_menu.style)
  }


  changeLanguage(lang: string): void {
    LanguageUtils.setLanguage(window, lang);
    const new_route = `/${lang}${this.router.url}`
    // console.log('++ new route ' + new_route)
    window.location.href = new_route




  }
  

  hidelink(link:string):void{
    if(link==""){
      $('.homelink')[0].style.display = 'none'
      $('.homelink')[1].style.display = 'none'

      $('.vlueiolink')[0].style.display = 'flex'
      $('.vlueiolink')[1].style.display = 'flex'
    }
    else if(link=="vlueio"){

      $('.homelink')[0].style.display = 'flex'
      $('.homelink')[1].style.display = 'flex'

      $('.vlueiolink')[0].style.display = 'none'
      $('.vlueiolink')[1].style.display = 'none'
    }
  }
  
  public changepage(route: string): void {
    this.router.navigate([`/${route}`]);
    if($('.dropdown_menu')[0].style.display == 'block') {
      $('.dropdown_menu')[0].style.display = 'none'
      $('.bgtggle')[0].style.display
    }
    this.changeNavColor(route)
    this.hidelink(route)

    

    
  }
  public changeNavColor(route: string): void {
    console.log(`change color for route ${route}`)
    if(route === ''){
      this.textColor = 'black'
     }
    else if (route=== 'vlueio'){
      this.textColor = 'white'
    }

    else if (route == 'veep'){
      this.textColor = 'white'
    }
    else if (route == 'tarius'){
      this.textColor = 'white'
    }


    


  }


}
