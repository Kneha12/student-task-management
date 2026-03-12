import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonButton,
  IonMenuButton,
  IonButtons,
  IonAvatar,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonListHeader,
  IonCard,
  IonProgressBar, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
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
  sunnyOutline,
  moonOutline,
  addOutline,
  hourglassOutline
  // checkmarkDoneCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, 
    IonProgressBar,
    IonCard,
    IonListHeader,
    IonIcon,
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenu,
    IonMenuButton,
    IonAvatar,
    IonLabel,
    IonItem,
    TaskCardComponent,
    IonButton,
  ],
})
export class HomePage implements OnInit {
  todayTasks = [
    {
      title: 'Math Assignment',
      deadline: 'Today 5 PM',
      priority: 'High',
    },
    {
      title: 'Physics Notes',
      deadline: 'Today 7 PM',
      priority: 'Medium',
    },
  ];

  upcomingTasks = [
    {
      title: 'Chemistry Lab',
      deadline: 'Tomorrow',
    },
    {
      title: 'English Essay',
      deadline: 'Friday',
    },
  ];
  
  darkMode = false;

toggleTheme() {
  this.darkMode = !this.darkMode;

  if (this.darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

  constructor() {
    addIcons({
      'grid-outline': gridOutline,
      'book-outline': bookOutline,
      'calendar-number-outline': calendarNumberOutline,
      'alarm-outline': alarmOutline,
      'stats-chart-outline': statsChartOutline,
      'timer-outline': timerOutline,
      'settings-outline': settingsOutline,
      'sunny-outline': sunnyOutline,
      'moon-outline': moonOutline,
      'add-outline':addOutline,
      'hourglass-outline':hourglassOutline,
      // 'checkmark-done-outline': checkmarkDoneCircleOutline
    });
  }

  ngOnInit() {}
}
