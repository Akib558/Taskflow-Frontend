import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {
    IGetTaskForUser,
    ITaskDetails,
} from '../../interfaces/task/task.model';

@Component({
    selector: 'app-task',
    imports: [],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    todo: ITaskDetails[] = [];

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        const requestPayload: IGetTaskForUser = {
            userGuidId: localStorage.getItem('userGuidId') ?? '',
        }; // Replace with actual user ID
        this.taskService
            .getAllTaskForUser(requestPayload)
            .subscribe((response) => {
                if (response.Success) {
                    response.Data.forEach((task: ITaskDetails) => {
                        this.todo.push(task);
                    });

                    console.log(this.todo);
                }
            });
    }
}
