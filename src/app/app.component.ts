import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,

} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, home, library } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  // We need to add, 'AddIcons' to render the icons
  // SRC: https://ionicframework.com/docs/api/tabs
  constructor() {
    addIcons({ heart, home, library });
  }
}
