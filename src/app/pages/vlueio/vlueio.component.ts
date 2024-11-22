import { Component } from '@angular/core';

@Component({
  selector: 'app-vlueio',
  standalone: true,
  imports: [],
  templateUrl: './vlueio.component.html',
  styleUrl: './vlueio.component.scss'
})
export class VlueioComponent {

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
