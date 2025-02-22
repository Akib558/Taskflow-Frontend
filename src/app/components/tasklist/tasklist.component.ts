import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IGetTaskForUser, ITaskDetails } from '../../models/task.model';
import { TaskService } from '../../services/taskSerives/task.service';

@Component({
  selector: 'app-tasklist',
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent implements OnInit {
  tasks: ITaskDetails[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    // Replace with actual user ID
    const requestPayload: IGetTaskForUser = {
      userGuidId: localStorage.getItem('userGuidId') ?? '',
    };
    this.taskService.getAllTaskForUser(requestPayload).subscribe((response) => {
      if (response.Success) {
        this.tasks = response.Data;
      }
    });
  }
}
