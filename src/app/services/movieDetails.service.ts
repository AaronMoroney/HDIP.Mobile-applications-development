
import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class movieDetailsService {
  constructor() {}

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }
}
