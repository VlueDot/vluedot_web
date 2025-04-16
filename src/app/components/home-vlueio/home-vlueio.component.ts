import { Component,OnInit } from '@angular/core';
import { LanguageUtils } from 'src/utils/language.utils';


@Component({
    selector: 'app-home-vlueio',
    imports: [],
    templateUrl: './home-vlueio.component.html',
    styleUrl: './home-vlueio.component.scss'
})
export class HomeVlueioComponent implements OnInit {
  public currentLang: string = 'en';
  ngOnInit(): void {
    this.currentLang = LanguageUtils.getLanguage(window)
  }


}
