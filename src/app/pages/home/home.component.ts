import { Component } from '@angular/core';
import { HomeVlueioComponent } from '../../components/home-vlueio/home-vlueio.component';
import {ClientspartnersComponent} from '../../components/clientspartners/clientspartners.component';
import {WhyusComponent} from '../../components/whyus/whyus.component';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from '../../components/projects/projects.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HomeVlueioComponent, CommonModule, ClientspartnersComponent, WhyusComponent, ProjectsComponent],
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