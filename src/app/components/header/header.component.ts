import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonText,
  IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonButtons,
    IonText,
    IonIcon
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
