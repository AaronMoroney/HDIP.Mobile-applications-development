import { Routes } from '@angular/router';
// components
import { TabsComponent } from './components/tabs/tabs.component';
// pages
import { HomePage } from './pages/home/home.page';
import { FavouritesPage } from './pages/favourites/favourites.page';
import { LibraryPage } from './pages/library/library.page';

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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
