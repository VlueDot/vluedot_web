import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


declare var $: any; // Para usar jQuery


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  public projects_items: any = [
    {
      'url': 'https://static.wixstatic.com/media/5ab796_96497302302345fdb6253529a72c08bc~mv2.jpg/v1/crop/x_0,y_65,w_958,h_872/fill/w_288,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20220816-WA0002.jpg',
      'title': 'Sanimapp',
      'description': 'App designed to optimize sanitary waste collection operations. It facilitated the organization, monitoring and communication in the work team in real time. It allowed to record and monitor collection activities.',

    },

    {
      'url': 'https://static.wixstatic.com/media/5ab796_08b921870e984e8dbf4c1c365dc11e83~mv2.jpg/v1/fill/w_288,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1208_edited_edited_edited.jpg',
      'title': 'Green IO',
      'description': 'App designed for the agro-industrial sector with the aim of facilitating the monitoring of field sensors in real time. His task was to obtain accurate data on soil and environmental conditions, such as humidity, temperature and other critical indicators to optimize cultivation and productivity.',

    },
    {
      'url': 'https://static.wixstatic.com/media/5ab796_92f2f03a93fe405aba9f9dca1f738d9a~mv2.png/v1/crop/x_74,y_0,w_1686,h_2025/fill/w_288,h_346,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-11-12%20at%2010_edited_edite.png',
      'title': 'Santino',
      'description': 'Set of tools created to manage orders in restaurants and hotels. This app focuses on improving customer service and facilitating service operations using AI services. It is in alpha version.',

    },
    {
      'url': 'https://static.wixstatic.com/media/11062b_21b1a8ea4fdf465f960b57f35d7f530f~mv2.jpg/v1/fill/w_288,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/T%C3%A9cnicos%20de%20paneles%20solares%20%20.jpg',
      'title': 'Santino Ops',
      'description': 'System to improve operational efficiency and communication in logistics, construction and related companies. It focuses on reducing costs, optimizing internal and external processes, and facilitating the flow of information between teams and external collaborators through AI integration.',

    },

  ]

  ngAfterViewInit(): void {


    try {
      $('.vcarousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '80px',
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 2400,
            settings: {
               centerMode: true,

            }
          },

          {
            breakpoint: 2101,
            settings: {
               centerMode: false,
               slidesToShow: 2

            }
          },
          {
            breakpoint: 1601,
            settings: {

               slidesToShow: 1,
                centerMode: true,

                centerPadding: 'calc(49.1vw - 344px)',


            }},

            {
              breakpoint: 641,
              settings: {
  
                 slidesToShow: 1,
                  centerMode: false,
  
                  // centerPadding: '5vw',
  
  
              }},




        ]
      });

    } catch (error) {
      console.error(error);

    }

  }

}
