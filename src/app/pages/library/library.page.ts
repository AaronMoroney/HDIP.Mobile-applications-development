// library
import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
} from '@ionic/angular/standalone';
import { play } from 'ionicons/icons';
import { addIcons } from 'ionicons';
// components
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    HeaderComponent
  ],
})
export class LibraryPage implements OnInit {
  constructor() {
      addIcons({ play });
  }
  ngOnInit() {}
}
