import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import type { Favourite } from '../components/maintainFavourites/maintainFavourites.component';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async get(key: string) {
    return await this.storage.get('favourites');
  }

  async set(key: string, value: Favourite) {
    // persist existing
    const existing = (await this.storage.get(key)) ?? [];
    // spread exisiting, and add a new value
    const updated = [...existing, value];
    // set it
    await this.storage.set(key, updated);
  }

  async remove(key: string, id: string) {
    const existing: Favourite[] = (await this.storage.get(key)) ?? [];
    const updated = existing.filter((item: Favourite) => item.id !== id);
    await this.storage.set(key, updated);
  }
}
