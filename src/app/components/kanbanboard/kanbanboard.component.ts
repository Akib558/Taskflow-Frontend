import { Component, OnInit, Inject } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/taskSerives/task.service';
import { IGetTaskForUser, ITaskDetails } from '../../models/task.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss'],
  imports: [DragDropModule],
})
export class KanbanBoardComponent implements OnInit {
  todo: ITaskDetails[] = [];
  inProgress: ITaskDetails[] = [];
  done: ITaskDetails[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
    console.log(this.done);
  }

  getTasks() {
    const requestPayload: IGetTaskForUser = {
      userGuidId: localStorage.getItem('userGuidId') ?? '',
    }; // Replace with actual user ID
    this.taskService.getAllTaskForUser(requestPayload).subscribe((response) => {
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
