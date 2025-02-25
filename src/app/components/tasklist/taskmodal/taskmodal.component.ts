import { Component } from '@angular/core';
import { ITaskDetails } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskmodal',
  imports: [CommonModule, FormsModule],
  templateUrl: './taskmodal.component.html',
  styleUrl: './taskmodal.component.scss',
})
export class TaskmodalComponent {
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

  saveChanges() {
    console.log(this.editedTask);
  }
}
