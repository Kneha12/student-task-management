import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, IonButton, IonMenuButton, IonButtons, IonAvatar, IonLabel, IonList, IonItem, IonIcon, IonListHeader, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonProgressBar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
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
  imports: [IonProgressBar, IonCard, IonListHeader, IonIcon, IonList, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonMenuButton, IonAvatar, IonLabel, IonItem, TaskCardComponent, IonButton, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent]
})
export class HomePage implements OnInit {
todayTasks = [
  {
    title: "Math Assignment",
    deadline: "Today 5 PM",
    priority: "High"
  },
  {
    title: "Physics Notes",
    deadline: "Today 7 PM",
    priority: "Medium"
  }
];

upcomingTasks = [
  {
    title: "Chemistry Lab",
    deadline: "Tomorrow"
  },
  {
    title: "English Essay",
    deadline: "Friday"
  }
];
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
