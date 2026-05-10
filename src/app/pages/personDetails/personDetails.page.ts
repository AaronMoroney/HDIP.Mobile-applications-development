//ENV imports
import { environment } from 'src/environments/environment';
// library
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, } from '@angular/router';
import { HttpOptions } from '@capacitor/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
// components
import { personDetailsURL } from 'src/app/services/constants';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SearchResultPreviewComponent } from 'src/app/components/searchResultPreview/searchResultPreview';
// services
import { personDetailsService } from 'src/app/services/personDetailService';
import { MovieDetailsPage } from '../movieDetails/movieDetails.page';


@Component({
  selector: 'app-person-details',
  templateUrl: './personDetails.page.html',
  styleUrls: ['./personDetails.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonList,
    IonItem,
    CommonModule,
    FormsModule,
    HeaderComponent,
    MovieDetailsPage,
    IonLabel,
    SearchResultPreviewComponent,
  ],
})
export class PersonDetailsPage implements OnInit {
  private apiKey = environment.MOVIE_DB_API_KEY;

  personData: any = [];
  personCastData: any = [];
  personId: string = '';

  options: HttpOptions = {
    url: '',
  };

  async getPersonDetails(personId: string) {
    this.options = {
      url: `${personDetailsURL}${personId}?api_key=${this.apiKey}`,
    };
    try {
      let getPersonDetails = await this.personDetailsService.get(this.options);
      this.personData = getPersonDetails.data;
    } catch {
      console.error(Error);
    }
  }

  async getPersonCastDetails(personId: string) {
    this.options = {
      url: `${personDetailsURL}${personId}/movie_credits?api_key=${this.apiKey}`,
    };
    try {
      //  There's lots of these results, for education purpose
      // Limit to 3
      let getPersonCastDetails = await this.personDetailsService.get(this.options);
      this.personCastData = getPersonCastDetails.data.cast.splice(0,3);
    } catch {
      console.error(Error);
    }
  }

  constructor(
    private personDetailsService: personDetailsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  async ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.personId) {
      this.getPersonDetails(this.personId);
      this.getPersonCastDetails(this.personId);
    }
  }
}
