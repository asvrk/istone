import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesPageRoutingModule } from './services-routing.module';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { GreyContactComponent } from 'src/app/common/grey-contact/grey-contact.component';

import { ServicesPage } from './services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesPageRoutingModule
  ],
  declarations: [ServicesPage, HeaderComponent, GreyContactComponent, FooterComponent]
})
export class ServicesPageModule {}
