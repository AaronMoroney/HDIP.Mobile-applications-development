import { Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonRouterOutlet
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonTabs,
    IonIcon,
    IonRouterOutlet,
  ],
})
export class TabsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
