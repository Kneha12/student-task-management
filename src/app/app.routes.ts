import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'add-task',
    loadComponent: () => import('./pages/add-task/add-task.page').then( m => m.AddTaskPage)
  },
  {
    path: 'task-details',
    loadComponent: () => import('./pages/task-details/task-details.page').then( m => m.TaskDetailsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },

];
