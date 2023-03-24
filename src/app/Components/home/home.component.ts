import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;
  isImageShown: boolean = true;
  constructor() {
    this.storeInfo = new StoreData(
      'Mohammed Store',
      'https://picsum.photos/400/200',
      ['Cairo', 'Alex', 'Luxor']
    );
  }

  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }

  ngOnInit(): void {}
}
