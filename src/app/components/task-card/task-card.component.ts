import { Component, OnInit, Input } from '@angular/core';
import { IonCard, IonLabel, IonBadge, IonCheckbox, IonItem } from "@ionic/angular/standalone";

@Component({
 selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonLabel, IonBadge, IonCheckbox, IonItem]
})
export class TaskCardComponent implements OnInit {

  @Input() task: any;

  constructor() {}

  ngOnInit() {}

}