import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButton, IonMenuButton, IonButtons, IonAvatar, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonButtons, IonMenuButton, IonAvatar, IonLabel, IonItem]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
