import { Component , AfterViewInit} from '@angular/core';
import { HomeVlueioComponent } from '../../components/home-vlueio/home-vlueio.component';
import {ClientspartnersComponent} from '../../components/clientspartners/clientspartners.component';
import {WhyusComponent} from '../../components/whyus/whyus.component';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from '../../components/projects/projects.component';
declare var $: any; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HomeVlueioComponent, CommonModule, ClientspartnersComponent, WhyusComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


//DAMN AUTOPLAY :( 

export class HomeComponent implements AfterViewInit {




  ngAfterViewInit(): void {


    try {

      const videoElement = $('.bgvideoitem')
      for (let i = 0; i < videoElement.length; i++){

        videoElement[i].play(); 
        videoElement[i].muted = true;
        
      }

      


    }
    catch (e) { console.log(e)}


}

}