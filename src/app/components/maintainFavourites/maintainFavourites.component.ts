import { Component, OnInit, Input } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
// services
import { FavouritesService } from 'src/app/services/favourites.service';
import { addIcons } from 'ionicons';
import { heart, heartOutline}  from 'ionicons/icons';

export interface Favourite {
  id: string;
  title: string;
  imageSrc: string;
}
@Component({
  selector: 'app-maintain-favourites',
  templateUrl: './maintainFavourites.component.html',
  styleUrls: ['./maintainFavourites.component.scss'],
  imports: [IonIcon, IonButton],
})
export class MaintainFavouritesComponent implements OnInit {
  isAlreadyFavourited: boolean = false;

  @Input() movieId: string = '';
  @Input() title: string = '';
  @Input() imageSrc: string = '';

  constructor(
    private favouriteService: FavouritesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    addIcons({heart, heartOutline})
  }

  async checkStorage(): Promise<boolean> {
    let currentList = await this.favouriteService.get('favourites');
    return currentList.some((item: Favourite) => item.id === this.movieId);
  }

  async changeFavourite() {
    const alreadyFavourited = await this.checkStorage();

    if (alreadyFavourited) {
      await this.favouriteService.remove('favourites', this.movieId);
      this.isAlreadyFavourited = false;
      return;
    }

    await this.favouriteService.set('favourites', {
      id: this.movieId,
      title: this.title,
      imageSrc: this.imageSrc,
    });

    this.isAlreadyFavourited = true;

    // move to favourites page
    this.router.navigate(['/favourites']);
  }

  async ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id') ?? '';
    this.isAlreadyFavourited = await this.checkStorage();
  }
}
