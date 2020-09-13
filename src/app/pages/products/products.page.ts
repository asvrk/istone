import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  isProdList: boolean = true;
  isProdDet: boolean = false;

  constructor(private menu: MenuController) {
    this.menu.close();
  }

  ngOnInit() {
  }

  showProdList() {
    this.isProdList = true;
    this.isProdDet = false;
  }
  showProdDet() {
    this.isProdList = false;
    this.isProdDet = true;
  }

}
