import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  // recupération de la liste des tâches
  
  getTasks(): any {
    return localStorage.getItem('tasks');
  }
  // sauvegarde de la liste des tâches
  save(tasks: Task[]) {
    //on stringify les objets pour les stocker dans le storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
