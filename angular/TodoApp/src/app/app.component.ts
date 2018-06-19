import { Component } from '@angular/core';
import { Task } from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {

  tasks: Task[];

  // Cette fonction  se déclenche dans l'application lorsqu'une nouvelle tâche est créée par l'utilisateur dans le composant app-addTask.
  // @param {Task}task
  newTask(task: Task){
    console.log(task);
    //On ajoute ma nouvelle tâche dans le tableau de tâches
    this.tasks.push(task)
  }
}
