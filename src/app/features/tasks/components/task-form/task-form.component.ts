import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup, FormsModule,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-form',
    imports: [ReactiveFormsModule, CommonModule, FormsModule],
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
    taskForm!: FormGroup;
    isSubTask: boolean = false;
    taskStatus = [
        { id: 0, status: 'Pending' },
        { id: 1, status: 'InProgress' },
        { id: 2, status: 'Completed' }
    ];

    taskType = [
        { id: 0, type: 'Bug' },
        { id: 1, type: 'Note' },
        { id: 2, type: 'Feature' }
    ];

    taskPriority = [
        { id: 0, priority: 'High' },
        { id: 1, priority: 'Medium' },
        { id: 2, priority: 'Low' },
        { id: 3, priority: 'Urgent' }
    ];

    selectedType: number = 0;
    selectedTypes: number = 0;
    selectedStatus: number = 0;

    constructor(private fb: FormBuilder, private taskService: TaskService) {
    }

    ngOnInit(): void {
        this.initForm();
        this.handleTaskTypeChange();
    }

    private initForm(): void {
        this.taskForm = this.fb.group({
            taskCategory: 'parent', // Default for radio buttons
            taskParentId: [null],
            taskTitle: ['', Validators.required],
            taskDescription: ['', Validators.required],
            taskStatus: [0, Validators.required], // Default: 'Pending'
            taskType: [0, Validators.required],       // Default: 'Bug'
            taskPriority: [0, Validators.required] // Default: 'Medium'
        });
    }

    private handleTaskTypeChange(): void {
        this.taskForm.get('taskCategory')?.valueChanges.subscribe((value) => {
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
            taskPriority: form.get('taskPriority')?.value
            // taskTypeCategory: form.get('taskTypeCategory')?.value,
        };

        if (this.isSubTask) {
            const parentId = form.get('taskParentId')?.value;
            if (parentId) taskData.taskParentId = Number(parentId);
        }

        return taskData;
    }

    onSubmit(): void {
        console.log(this.taskForm.value);
        if (this.taskForm.invalid) {
            this.taskForm.markAllAsTouched();
            return;
        }
        this.resetForm();

    }

    resetForm(): void {
        this.taskForm.reset({
            taskCategory: 'parent',
            taskParentId: null,
            taskTitle: '',
            taskDescription: '',
            taskStatus: 0,
            taskPriority: 0,
            taskType: 0
        });
        this.isSubTask = false;
    }
}
