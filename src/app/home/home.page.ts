import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay:true
  };
  testimonialSlideOpts = {    
    initialSlide: 0,
    speed: 400,
  }
  constructor(private menu: MenuController) {    
    this.menu.close();
  }

}
