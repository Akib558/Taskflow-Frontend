import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  isSubTask: boolean = false;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.initForm();
    this.handleTaskTypeChange();
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      taskType: ['parent', Validators.required],
      taskParentId: [null],
      taskTitle: ['', Validators.required],
      taskDescription: ['', Validators.required],
      taskStatus: [''],
      taskPriority: [''],
      taskTypeCategory: [''],
    });
  }

  private handleTaskTypeChange(): void {
    this.taskForm.get('taskType')?.valueChanges.subscribe((value) => {
      this.isSubTask = value === 'sub';
      if (!this.isSubTask) {
        this.taskForm.get('taskParentId')?.setValue(null);
      }
    });
  }

  private createTaskData(): Partial<Task> {
    const form = this.taskForm;
    const taskData: Partial<Task> = {
      taskCreatedBy: localStorage.getItem('userGuidId') ?? '',
      taskTitle: form.get('taskTitle')?.value,
      taskDescription: form.get('taskDescription')?.value,
      taskStatus: form.get('taskStatus')?.value,
      taskType: form.get('taskType')?.value,
      taskPriority: form.get('taskPriority')?.value,
      // taskTypeCategory: form.get('taskTypeCategory')?.value,
    };

    if (this.isSubTask) {
      const parentId = form.get('taskParentId')?.value;
      if (parentId) taskData.taskParentId = Number(parentId);
    }

    return taskData;
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    // const taskData = this.createTaskData();
    // this.taskService.createTask(taskData).subscribe({
    //     next: (response) => {
    //         console.log('Task created:', response);
    //         this.resetForm();
    //         window.location.reload(); // Replace this in production
    //     },
    //     error: (err) => {
    //         console.error('Task creation failed:', err);
    //     },
    // });
  }

  resetForm(): void {
    this.taskForm.reset({
      taskType: 'parent',
      taskParentId: null,
      taskTitle: '',
      taskDescription: '',
      taskStatus: '',
      taskPriority: '',
      taskTypeCategory: '',
    });
    this.isSubTask = false;
  }
}
