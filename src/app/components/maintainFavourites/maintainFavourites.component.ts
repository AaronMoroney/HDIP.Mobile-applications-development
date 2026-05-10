import { Component, OnInit } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';

// TO-DO (Maintain favourites)
// ==========================================================
// [✅] -> Add the maintainFavourites template to all instances (only add on individual page)
// [❌✅] -> Watch videos on maintaining data
// [✅] -> will have to navigate to a single page UI so we can click the button
// [✅] -> Will have to render some basic data about a film first
// [✅] -> Get some sort of ID down to this component
// [] -> Test the indexedDB for the data
// [] -> Read the data on the favourites page UI

@Component({
  selector: 'app-maintain-favourites',
  templateUrl: './maintainFavourites.component.html',
  styleUrls: ['./maintainFavourites.component.scss'],
  imports: [IonIcon, IonButton]
})
export class MaintainFavouritesComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}
}
