import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonText,
  ],
})

export class CTAComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  // input dynamic values with empty default strings
  @Input() heading = '';
  @Input() imageUrl = '';
  @Input() imageAlt = '';
  @Input() cardHeader = '';
  @Input() buttonLabel = '';
  @Input() buttonRoute = '';
  @Input() routerLink = '';
}
