import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,TranslateModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  taskForm: FormGroup;
  @Output() taskCreated = new EventEmitter<{taskName:string, taskDescription:string}>();
  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      taskName:["", Validators.required],
      taskDescription:["", Validators.required]
    });
   }

   onSubmit() {
    if(this.taskForm.valid) {
     this.taskCreated.emit(this.taskForm.value);
     this.taskForm.reset();
    }else {
      this.taskForm.markAllAsTouched();
    }
   }
   hasError(controlName: string, errorName: string) {
    return this.taskForm.controls[controlName].hasError(errorName) && (this.taskForm.controls[controlName].dirty || this.taskForm.controls[controlName].touched);
  }
}
