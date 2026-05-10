// library
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar
} from '@ionic/angular/standalone';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// components
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    HeaderComponent
  ],
})
export class FavouritesPage implements OnInit {
  constructor() {
      addIcons({ play });
  }
  ngOnInit() {}
}
