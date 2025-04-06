import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LanguageUtils } from 'src/utils/language.utils';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  public currentLang: string = 'en';


  constructor(private router: Router) { }

  public gohome(): void {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    })
  }

  ngOnInit(): void {
    
    this.currentLang = LanguageUtils.getLanguage(window)
  }




}
