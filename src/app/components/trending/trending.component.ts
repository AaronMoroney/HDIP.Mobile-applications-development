import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonText,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // required for swiper web components
})
export class TrendingComponent implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Currently Watching',
      data: {
        action: 'Add to currently watching',
      },
    },
    {
      text: 'Want To Watch',
      data: {
        action: 'Add to want',
      },
    },
    {
      text: 'Watched',
      data: {
        action: 'Add to watched',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  constructor() {}
  ngOnInit() {}
}
