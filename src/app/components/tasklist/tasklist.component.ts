import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IGetTaskForUser, ITaskDetails } from '../../models/task.model';
import { TaskService } from '../../services/taskSerives/task.service';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasklist',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent implements OnInit {
  tasks: ITaskDetails[] = [];
  isEditing = false;

  editedTask: ITaskDetails = {
    id: 0,
    taskParentId: 0,
    taskGuidId: '',
    taskParentGuidId: '',
    taskCreatedBy: '',
    taskTitle: '',
    taskDescription: '',
    taskProjectGuidId: '',
    taskStatus: '',
    taskType: '',
    taskPriority: '',
    taskDeleted: 0,
    taskCreatedDate: '',
    taskUpdatedDate: '',
    taskDueDate: '',
  };

  @ViewChild('taskDetailsModal') taskModal!: ElementRef;

  constructor(
    private taskService: TaskService,
    private modalService: NgbModal
  ) {}

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

  saveChanges() {
    console.log(this.editedTask);
  }
  deleteTask() {
    console.log(this.editedTask);
  }

  openTaskDetailsModal(task: ITaskDetails, content: any) {
    this.editedTask = task; // Set the task to be edited
    this.modalService.open(content, { size: 'xl' }); // Open the modal
  }
}
