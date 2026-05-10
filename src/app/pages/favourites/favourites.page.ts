// library
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonText
} from '@ionic/angular/standalone';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// components
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchResultPreviewComponent } from 'src/app/components/searchResultPreview/searchResultPreview';
//services
import { FavouritesService } from 'src/app/services/favourites.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonText,
    HeaderComponent,
    SearchResultPreviewComponent,
    FormsModule,
    CommonModule
  ],
})
export class FavouritesPage {
  storedFavourites: any = [];

  constructor(private favouriteService: FavouritesService) {
    addIcons({ play });
  }

  async getStorage () {
    this.storedFavourites = await this.favouriteService.get("favourites");
  }

  ionViewWillEnter() {
    this.getStorage();
  }
}
