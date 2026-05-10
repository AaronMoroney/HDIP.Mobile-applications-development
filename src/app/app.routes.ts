import { Routes } from '@angular/router';
// components
import { TabsComponent } from './components/tabs/tabs.component';
// pages
import { HomePage } from './pages/home/home.page';
import { FavouritesPage } from './pages/favourites/favourites.page';
import { LibraryPage } from './pages/library/library.page';
import { MovieDetailsPage } from './pages/movieDetails/movieDetails.page';
import { PersonDetailsPage } from './pages/personDetails/personDetails.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'library',
        component: LibraryPage,
      },
      {
        path: 'favourites',
        component: FavouritesPage
      },
      {
        path: 'movie-details/:id',
        component: MovieDetailsPage
      },
      {
        path: 'person-details/:id',
        component: PersonDetailsPage
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
