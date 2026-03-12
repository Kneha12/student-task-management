import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButton, IonMenuButton, IonButtons, IonAvatar, IonLabel, IonList, IonItem, IonIcon, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  gridOutline, 
  bookOutline, 
  calendarNumberOutline, 
  alarmOutline, 
  statsChartOutline, 
  timerOutline, 
  settingsOutline,
  // checkmarkDoneCircleOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonIcon, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonButtons, IonMenuButton, IonAvatar, IonLabel, IonItem]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      'grid-outline':gridOutline,
      'book-outline':bookOutline,
      'calendar-number-outline':calendarNumberOutline,
      'alarm-outline': alarmOutline,
      'stats-chart-outline': statsChartOutline,
      'timer-outline': timerOutline,
      'settings-outline': settingsOutline,
      // 'checkmark-done-outline': checkmarkDoneCircleOutline
    })
   }

  ngOnInit() {
  }

}
