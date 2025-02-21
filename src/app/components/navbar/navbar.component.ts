import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/taskSerives/task.service';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  taskForm!: FormGroup;
  isSubTask: boolean = false;
  @ViewChild('exampleModal') exampleModal: any;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit() {
    console.log('navbar component');

    this.taskForm = this.fb.group({
      taskType: ['parent'],
      taskParentId: [''],
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required],
      taskStatus: [''],
      taskPriority: [''],
      taskTypeCategory: [''],
    });
    this.taskForm.get('taskType')?.valueChanges.subscribe((value) => {
      this.isSubTask = value === 'sub';
      if (!this.isSubTask) {
        this.taskForm.get('taskParentId')?.setValue('');
      }
    });
  }

  createTaksData(): ITask {
    let taskData: ITask = {
      taskCreatedBy: localStorage.getItem('userGuidId') ?? '',
      taskTitle: this.taskForm.get('taskTitle')?.value,
      taskDescription: this.taskForm.get('taskDescription')?.value,
      taskStatus: this.taskForm.get('taskStatus')?.value,
      taskType: this.taskForm.get('taskType')?.value,
      taskPriority: this.taskForm.get('taskPriority')?.value,
    };
    return taskData;
  }

  onSubmit() {
    if (this.taskForm.valid) {
      let taskData = this.createTaksData();
      this.taskService.addTask(taskData).subscribe({
        next: (response) => {
          console.log(response);
          this.resetForm();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  resetForm() {
    this.taskForm.reset({
      taskType: '',
      taskParentId: '',
      taskTitle: '',
      taskDescription: '',
      taskStatus: '',
      taskPriority: '',
      taskTypeCategory: '',
    });
    this.isSubTask = false;
  }
}
