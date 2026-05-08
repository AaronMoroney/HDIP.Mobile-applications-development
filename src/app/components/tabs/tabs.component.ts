import { Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonToolbar,
  IonTab,
  IonHeader,
  IonContent,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { HomePage } from 'src/app/pages/home/home.page';
import { FavouritesPage } from 'src/app/pages/favourites/favourites.page';
import { LibraryPage } from 'src/app/pages/library/library.page';

// TO-DO
// Can i destrucutre / spread in 'components', 'pages, and import them from an external file?
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonTabs,
    IonIcon,
    IonToolbar,
    IonTab,
    IonHeader,
    IonContent,
    // component
    HeaderComponent,
    // pages
    HomePage,
    FavouritesPage,
    LibraryPage,
  ],
})
export class TabsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
