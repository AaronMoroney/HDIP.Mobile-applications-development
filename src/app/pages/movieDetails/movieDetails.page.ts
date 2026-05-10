// ENV imports
import { environment } from 'src/environments/environment';
// library
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonText,
  IonButton,
} from '@ionic/angular/standalone';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { movieDetailsURL } from 'src/app/services/constants';
import { HttpOptions } from '@capacitor/core';
// components
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MaintainFavouritesComponent } from 'src/app/components/maintainFavourites/maintainFavourites.component';
import { MaintainLibraryActionComponent } from 'src/app/components/maintainLibraryAction/maintainLibraryAction.component';
// services
import { movieDetailsService } from 'src/app/services/movieDetails.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movieDetails.page.html',
  styleUrls: ['./movieDetails.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonText,
    IonButton,
    CommonModule,
    FormsModule,
    HeaderComponent,
    MaintainFavouritesComponent,
    MaintainLibraryActionComponent,
  ],
})
export class MovieDetailsPage implements OnInit {
  private apiKey = environment.MOVIE_DB_API_KEY;

  // TODO: find a data type for this
  movieDetailsCast: any = [];
  movieDetailsCrew: any = [];
  movieId: string = '';
  // Data being passed in to this component
  title: string = '';
  imageSrc: string = '';
  description: string = '';

  options: HttpOptions = {
    url: '',
  };

  goToPersonDetails(personId: string) {
    this.router.navigate(['/person-details', personId], {});
  }

  async getMovieDetails(movieId: string) {
    this.options = {
      url: `${movieDetailsURL}${movieId}/credits?api_key=${this.apiKey}`,
    };
    try {
      let getDetails = await this.movieDetailsService.get(this.options);
      // These return massive arrays, for educational purposes, let's use 3.
      this.movieDetailsCast = getDetails.data.cast.splice(0, 3);
      this.movieDetailsCrew = getDetails.data.crew.splice(0, 3);
    } catch {
      console.error(Error);
    }
  }

  constructor(
    private movieDetailsService: movieDetailsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    addIcons({ play });
  }

  async ngOnInit() {
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras?.state;

    if (state) {
      this.title = state['title'];
      this.imageSrc = state['imageSrc'];
      this.description = state['description'];
    }
    this.movieId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.movieId) {
      this.getMovieDetails(this.movieId);
    }
  }
}
