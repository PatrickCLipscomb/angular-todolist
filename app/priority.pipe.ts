import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args) {
    var currentPriorityState = args[0];
    if (currentPriorityState === "Low") {
      return input.filter(function(task){
        return task.priority === "Low";
      });
    } else if (currentPriorityState === "Medium") {
      return input.filter(function(task){
        return task.priority === "Medium";
      });
    } else if (currentPriorityState === "High") {
      return input.filter(function(task){
        return task.priority === "High";
      });

    } else {
      return input;
    }
  }
}
