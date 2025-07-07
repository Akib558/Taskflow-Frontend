import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Task } from '../../models/task.model';
import { ApiService } from '../../../../core/services/api.service';
import { environment } from '../../../../../environments/environment';
import { NgClass, NgForOf } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-task-list',
    imports: [RouterModule, NgForOf, TaskCardComponent],
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
    taskList: Task[] = [];

    constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
    }
    
    ngOnInit(): void {
        this.getTaskList();
    }


    getTaskList(): void {
        this.taskService.getTaskList().subscribe({
            next: (data: any) => {
                if (data.success) {
                    this.taskList = data.data;
                }
            }
        });
    }

    goToTaskDetail(): void{
        this.router.navigate(['taskdetails'], { relativeTo: this.route });
    }

    editTask(task: Task): void {

    }

    deleteTask(taskId: number): void {

    }
}
