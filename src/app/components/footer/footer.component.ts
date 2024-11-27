import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) { }

  public gohome(): void {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0);
    })
  }


}
