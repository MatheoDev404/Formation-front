import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  // recupération de la liste des tâches
  
  getTasks(): any {
    //Avnat de retourner les donnée, je m'assure qu'il y a bien des données dans me localstorage, si il n'y a pas de données, je return un tableau vide.
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if(null !== tasks){
      return tasks;
    }else{
      return [];
    }
  }
  // sauvegarde de la liste des tâches
  save(tasks: Task[]) {
    //on stringify les objets pour les stocker dans le storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
