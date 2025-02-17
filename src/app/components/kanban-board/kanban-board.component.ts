import { Component, OnInit, Inject } from '@angular/core';
import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
    transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
    IGetTaskForUser,
    ITaskDetails,
} from '../../interfaces/task/task.model';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-kanban-board',
    templateUrl: './kanban-board.component.html',
    styleUrls: ['./kanban-board.component.scss'],
    imports: [DragDropModule],
})
export class KanbanBoardComponent implements OnInit {
    todo: ITaskDetails[] = [];
    inProgress: ITaskDetails[] = [];
    done: ITaskDetails[] = [];

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
                        if (task.taskStatus === 'todo') {
                            this.todo.push(task);
                        } else if (task.taskStatus === 'in-progress') {
                            this.inProgress.push(task);
                        } else {
                            this.done.push(task);
                        }
                    });
                }
            });
    }

    drop(event: CdkDragDrop<ITaskDetails[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
