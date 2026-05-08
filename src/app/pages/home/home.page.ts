import { Component } from '@angular/core';
import { IonSearchbar } from '@ionic/angular/standalone';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { CTAComponent } from 'src/app/components/cta/cta.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonSearchbar,
    TrendingComponent,
    CTAComponent
  ],
})
export class HomePage {
  constructor() {
    addIcons({ play });
  }
}
