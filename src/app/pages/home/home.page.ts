// ENV imports
import { environment } from 'src/environments/environment';
// library imports
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonSearchbar, IonHeader, IonContent, IonToolbar } from '@ionic/angular/standalone';
import { HttpOptions } from '@capacitor/core';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// components imports
import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { CTAComponent } from 'src/app/components/cta/cta.component';
import { SearchResultPreviewComponent } from 'src/app/components/searchResultPreview/searchResultPreview';
import { HeaderComponent } from 'src/app/components/header/header.component';
// services imports
import { searchService } from 'src/app/services/search.service';
import { baseURL } from 'src/app/services/constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSearchbar,
    IonHeader,
    IonContent,
    IonToolbar,
    HeaderComponent,
    TrendingComponent,
    CTAComponent,
    SearchResultPreviewComponent,
    FormsModule,
    CommonModule,
  ],
})

export class HomePage {
  private apiKey = environment.MOVIE_DB_API_KEY;
  private URL = baseURL;

  isFocused = false;
  searchString = '';
  // TODO: find a data type for this
  searchResult: any=[];

  options: HttpOptions = {
    url: '',
  };

  onFocus() {
    this.isFocused = true;
  }

  onInput(event: any) {
    this.searchString = event.detail.value ?? '';
    this.makeSearch(this.searchString);
  }

  // TODO: add a debouncer
  async makeSearch(query: string) {
    this.options = {
      url: `${this.URL}${this.searchString}&api_key=${this.apiKey}`,
    };
    try {
      let getResult = await this.search.get(this.options);
      this.searchResult = getResult.data.results;
    } catch {
      console.error(Error);
    }
  }

  constructor(private search: searchService) {
    addIcons({ play });
  }
}
