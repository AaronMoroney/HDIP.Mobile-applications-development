import { Routes } from '@angular/router';
import { FavouritesPage } from './favourites/favourites.page';
import { HomePage } from './home/home.page';
import { LibraryPage } from './library/library.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'favourites', component: FavouritesPage},
  { path: 'library', component: LibraryPage},
];
