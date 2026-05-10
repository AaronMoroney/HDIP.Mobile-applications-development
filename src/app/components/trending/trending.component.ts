// ENV impports
import { environment } from 'src/environments/environment';
// library
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpOptions } from '@capacitor/core';
// services import
import { trendingURL } from 'src/app/services/constants';
import { trendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonText,
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // required for swiper web components
})

export class TrendingComponent implements OnInit {
  private apiKey = environment.MOVIE_DB_API_KEY;

  trendingResult: any = [];
  topTrending: any = [];

  options: HttpOptions = {
    url: '',
  };

  async getTrending() {
    this.options = {
      url: `${trendingURL}${this.apiKey}`
    }
    try {
      let trending = await this.trending.get(this.options);
      // Limit to ten results
      this.trendingResult = trending.data.results.slice(0,10);
      // Limit to the first result
      this.topTrending = trending.data.results.slice(0,1);
    } catch {
      console.error(Error);
    }
  }

  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
  @Input() id: number = 0;
  @Input() description: string = '';

  constructor(
    private trending: trendingService,
    private router: Router
  ) {}

  goToMovieDetails(movieId: number, movie: any) {
  this.router.navigate(['/movie-details', movieId], {
    state: {
      title: movie.title,
      imageSrc: movie.poster_path,
      imageAlt: movie.title,
      id: movieId,
      description: movie.overview
    },
  });
}

  // NgOnInit - Fire getTrending on app mount
  ngOnInit() {
    this.getTrending();
  }
}
