import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { CommonModule } from '@angular/common';
import { CardTaskComponent } from '../card-task/card-task.component';
import { Task } from '../../model/Task';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';



@Component({
  selector: 'app-task-status-column',
  standalone: true,
  imports: [TaskFormComponent,MatIcon, MatTooltip, CommonModule,CardTaskComponent,TranslateModule],
  templateUrl: './task-status-column.component.html',
  styleUrl: './task-status-column.component.scss'
})

export class TaskStatusColumnComponent {
  showTaskForm:boolean = false;
  savedTasks:Task[] = [];
  secondColumnTasks:Task[] = [];
  thirdColumnTasks:Task[] = [];

  addTaskForm(){
    this.showTaskForm = true;
  }

  onTaskCreated(taskData:Task){
    console.log(taskData);
    this.savedTasks.push(taskData);
    this.showTaskForm= false
  }

  deleteTask(index: number) {
    this.savedTasks.splice(index, 1);
  }

  deleteTaskFromSecondColumn(index: number) {
    this.secondColumnTasks.splice(index, 1);
  }

  deleteTaskFromThirdColumn(index: number) {
    this.thirdColumnTasks.splice(index, 1);
  }
  
  moveToNextColumn(task: Task) {
    const index = this.savedTasks.indexOf(task);
    if (index >= 0) {
      this.savedTasks.splice(index, 1);
      this.secondColumnTasks.push(task);
    }
  }

  moveToPreviousColumn(task: Task) {
    const index = this.secondColumnTasks.indexOf(task);
    if (index >= 0) {
      this.secondColumnTasks.splice(index, 1);
      this.savedTasks.push(task);
    }
  }

  moveTaskToNextColumn(task: Task) {
    const index = this.secondColumnTasks.indexOf(task);
    if (index >= 0) {
      this.secondColumnTasks.splice(index, 1);  
      this.thirdColumnTasks.push(task);  
    }
  }

  moveTaskToPreviousColumn(task: Task) {
    const index = this.thirdColumnTasks.indexOf(task);
    if (index >= 0) {
      this.thirdColumnTasks.splice(index, 1);  
      this.secondColumnTasks.push(task);  
    }
  }
}
  
  

