import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { GreyContactComponent } from 'src/app/common/grey-contact/grey-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, HeaderComponent, GreyContactComponent, FooterComponent]
})
export class AboutPageModule {}
