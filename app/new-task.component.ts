import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form col-sm-8">
    <h3>Create Task</h3>
    <input placeholder="Description" class="input-lg form-control" #newDescription>
    <input placeholder="Category" class="input-lg form-control" #newCategory>
    <select #newPriority>
      <option value="Low">Low</option>
      <option value="Medium" selected="selected">Medium</option>
      <option value="High">High</option>
    </select>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    userDescription.value = "";
    userPriority.value = "";
    userCategory.value = "";
  }
}
