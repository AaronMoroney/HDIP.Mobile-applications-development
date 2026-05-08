import { Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'library',
        loadComponent: () => import('./pages/library/library.page').then((m) => m.LibraryPage),
      },
      {
        path: 'favourites',
        loadComponent: () => import('./pages/favourites/favourites.page').then((m) => m.FavouritesPage),
      },
      {
        path: '',
        redirectTo: '/example/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
