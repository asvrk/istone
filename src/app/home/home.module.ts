import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { GreyContactComponent } from '../common/grey-contact/grey-contact.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, GreyContactComponent, FooterComponent]
})
export class HomePageModule {}
