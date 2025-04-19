import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgClass } from '@angular/common';

@Component({
    selector: '[app-task-card]',
    templateUrl: './task-card.component.html',
    imports: [
        NgClass
    ],
    styleUrls: ['./task-card.component.scss']
})

export class TaskCardComponent {
    @Input() task!: Task;

    editTask(task: Task): void {
        // Implement edit functionality
    }

    deleteTask(taskId: number): void {
        // Implement delete functionality
    }
}
