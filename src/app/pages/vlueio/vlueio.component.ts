import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-vlueio',
  standalone: true,
  imports: [],
  templateUrl: './vlueio.component.html',
  styleUrl: './vlueio.component.scss'
})
export class VlueioComponent implements OnInit {


  public playvideo(video: HTMLVideoElement): void {

    var playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        video.play()
        video.muted = true;
      })
        .catch(error => {
          console.log(error)
        });
    }
  }




  private posstep = 0;
  private carouselInterval: any;
  private carouselStarted = false;
  private speed = 400;
  private qtty_items = 4;

  private x_init = -35
  private y_init = -12

  public url1 = "https://static.wixstatic.com/media/5ab796_4efccae7189e4e23816509dc346147eb~mv2.png/v1/fill/w_200,h_133,al_c,q_80,usm_0.66_1.00_0.01/5ab796_4efccae7189e4e23816509dc346147eb~mv2.png"
  public url2 = "https://static.wixstatic.com/media/5ab796_0ba8ef1900ed4b3c89168f728730b6e4~mv2.png/v1/fill/w_200,h_176,al_c,q_80,usm_0.66_1.00_0.01/5ab796_0ba8ef1900ed4b3c89168f728730b6e4~mv2.png"
  public url3 = "https://static.wixstatic.com/media/5ab796_17ce0190eb1d435587115b618b0e073a~mv2.png/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01/5ab796_17ce0190eb1d435587115b618b0e073a~mv2.png"
  public url4 = "https://static.wixstatic.com/media/5ab796_e334fcbafb694bd3a1e93f3593e2c100~mv2.png/v1/fill/w_250,h_200,al_c,q_80,usm_0.66_1.00_0.01/5ab796_e334fcbafb694bd3a1e93f3593e2c100~mv2.png"

  




  ngOnInit(): void {



  }

  rotateCarousel(carousel:any): void {


    const elementA = carousel.querySelector('.a') as HTMLElement;
    const elementB = carousel.querySelector('.b') as HTMLElement;
    const elementC = carousel.querySelector('.c') as HTMLElement;
    const elementD = carousel.querySelector('.d') as HTMLElement;
    // const elementE = carousel.querySelector('.e') as HTMLElement;

    

    if (carousel) {
      var  x0 = Math.cos(this.posstep/this.speed)
      var  y0 = Math.sin(this.posstep/this.speed)
      var  x1 = Math.cos(this.posstep/this.speed +Math.PI/this.qtty_items*2)
      var  y1 = Math.sin(this.posstep/this.speed+ Math.PI/this.qtty_items*2)
      var  x2 = Math.cos(this.posstep/this.speed + Math.PI/this.qtty_items*2*2)
      var  y2 = Math.sin(this.posstep/this.speed + Math.PI/this.qtty_items*2*2)
      var  x3 = Math.cos(this.posstep/this.speed + Math.PI/this.qtty_items*3*2)
      var  y3 = Math.sin(this.posstep/this.speed + Math.PI/this.qtty_items*3*2)
      // var  x4 = Math.cos(this.posstep/this.speed + Math.PI/this.qtty_items*4*2)
      // var  y4 = Math.sin(this.posstep/this.speed + Math.PI/this.qtty_items*4*2)
      

      elementA.style.transform = ` translateX(${this.x_init*x0}vw) translateY(${this.y_init*y0}vh)`
      elementB.style.transform = ` translateX(${this.x_init*x1}vw) translateY(${this.y_init*y1}vh)`

      elementC.style.transform = ` translateX(${this.x_init*x2}vw) translateY(${this.y_init*y2}vh)`
      elementD.style.transform = ` translateX(${this.x_init*x3}vw) translateY(${this.y_init*y3}vh)`
      // elementE.style.transform = ` translateX(${this.x_init*x4}vw) translateY(${this.y_init*y4}vh)`


    }

    this.posstep +=1

      



  }

  public startCarousel(carousel:any): void {
    if(!this.carouselStarted){
    console.log('Start carousel')
    this.carouselStarted = true;
    this.carouselInterval = setInterval(() => this.rotateCarousel(carousel), 10);
  }}

  stopCarousel(carousel:any): void {
    if(this.carouselStarted){
      this.carouselStarted = false
    clearInterval(this.carouselInterval);

  }}




}
