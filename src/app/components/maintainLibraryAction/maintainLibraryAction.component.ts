import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  IonActionSheet,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-maintain-library-action',
  templateUrl: './maintainLibraryAction.component.html',
  styleUrls: ['./maintainLibraryAction.component.scss'],
  imports: [
    IonActionSheet,
    IonButton
  ]
})
export class MaintainLibraryActionComponent  implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Currently Watching',
      data: {
        action: 'Add to currently watching',
      },
    },
    {
      text: 'Want To Watch',
      data: {
        action: 'Add to want',
      },
    },
    {
      text: 'Watched',
      data: {
        action: 'Add to watched',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  triggerId: string = '';
  
  @Input() index: number = 0;

  ngOnInit() {
    this.triggerId = `open-action-sheet-${this.index}`;
  }
  constructor() { }
}
