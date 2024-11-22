import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeVlueioComponent } from '../../components/home-vlueio/home-vlueio.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HomeVlueioComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


//DAMN AUTOPLAY :( 

export class HomeComponent {



  public playvideo(video: HTMLVideoElement): void {

    var playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        video.play()
      })
      .catch(error => {
        console.log(error)
      });
    }
  }

}