import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink],
})
export class HomePage {
  constructor() {}
}
