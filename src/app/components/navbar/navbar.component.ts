import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}
  private dropdown_menu_stat = "closed"
  public openmenu(dropdown_menu:HTMLElement): void {
    if(this.dropdown_menu_stat == "closed") { dropdown_menu.style.display = 'block' ;  this.dropdown_menu_stat ="opened"}
    else {  dropdown_menu.style.display = 'none' ;  this.dropdown_menu_stat ="closed"}

    
    console.log('open menu'+dropdown_menu.style)
  }

  public gohome(): void {
    this.router.navigate(['/']); 
  }

}
