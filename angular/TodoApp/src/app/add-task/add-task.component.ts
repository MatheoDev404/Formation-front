import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../shared/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // cela me permet d'émettre un évenmement lors de la création d'une nouvelle tâche.
  // @type {EventEmitter<any>}
  @Output() newTaskEvent = new EventEmitter();

  // la tâche a créé
  // @type {Task}
  task : Task = new Task();
  
  // Permet de réinitaliser le formulaire
  // @type {boolean}
  active = true;
  
  constructor() { }

  ngOnInit() {
  }

  // Cette fonction est appellée lors de la création d'une tâche.
  addTask(){
    // Lorsque l'utilisateru soumet sa tâche, j'émets l'évenement avec la nouvelle tâche.
    this.newTaskEvent.emit({
      task: this.task
    });
    this.task = new Task();
    this.active = false;
    
    setTimeout(()=> this.active = true, 0);

  }

}
