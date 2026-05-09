import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-result-preview',
  templateUrl: './searchResultPreview.component.html',
  styleUrls: ['./searchResultPreview.component.scss'],
  imports: [
    IonCard,
    IonSpinner,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
  ],
})
export class SearchResultPreviewComponent {
  constructor() {}

  // src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  get isLoading(): boolean {
    // accounts for '' as false
    // show spinner
    // NOTE: can't depend on image, as it is often empty.
    return !this.title;
  }

  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';
}
