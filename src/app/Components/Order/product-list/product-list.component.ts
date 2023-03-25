import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  catList: ICategory[];
  selectedCatID: number = 0;
  prdList: IProduct[];
  orderTotalPrice: number = 0;
  orderDate: Date;
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
    this.prdList = [
      {
        id: 100,
        name: 'LenovoThinkpad laptop',
        price: 10000000,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Apple MacBook laptop',
        price: 2007780,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Lenovo Tap 2',
        price: 3000,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 40.5,
        name: 'Samsung Tap',
        price: 400,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 50000,
        name: 'Samsung Note 10',
        price: 500,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
    ];

    this.orderDate = new Date();
  }

  buy(prdPrice: number, count: string) {
    // this.orderTotalPrice = count as number * prdPrice;
    // this.orderTotalPrice = parseInt(count) * prdPrice;
    this.orderTotalPrice = +count * prdPrice;
  }

  changeCat() {
    this.selectedCatID = Math.ceil(Math.random() * 3);
  }

  prdTrackByFun(index: number, prd: IProduct): number {
    return prd.id;
  }

  ngOnInit(): void {}
}
