import { Component, OnInit } from '@angular/core';
import { Task } from './shared/models/task';
import { TaskStorageService } from './shared/services/task-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private taskStorageService: TaskStorageService ) {

  }

  tasks: Task[] = [];

  ngOnInit(): void {
    //au chargement de l'aplication je recupère mès tâches dans mon localestorage.
    this.tasks = this.taskStorageService.getTasks();
  }

  // Cette fonction  se déclenche dans l'application lorsqu'une nouvelle tâche est créée par l'utilisateur dans le composant app-addTask.
  // @param {Task}task
  newTask(task: Task){
    
    console.log(task);

    // On ajoute la nouvelle tâche dans le tableau de tâches, et on sauvegarde nos tâches dans le storage
    this.tasks.push(task);
    this.taskStorageService.save(this.tasks);
  }
  
  
  // L'utilisateur viens de terminer une tâche.
  // @param {Task} task
  taskIsDone(task: Task){
    // Je passe la tâche de l'utilisateur à true et je sauvegarde toutes les tâches.
    task.status = true;
    this.taskStorageService.save(this.tasks);
  }
}
