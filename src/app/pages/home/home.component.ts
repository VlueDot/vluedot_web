import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeVlueioComponent } from '../../components/home-vlueio/home-vlueio.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeVlueioComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// export class HomeComponent implements AfterViewInit {
//   @ViewChild('bglayerVideo', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;

//   ngAfterViewInit(): void {
//     if (this.videoElement && this.videoElement.nativeElement) {
//       const video = this.videoElement.nativeElement;
//       video.play();  // Play the video directly without jQuery
//     }
//   }
// }

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