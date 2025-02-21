export interface ITask {
  taskParentId?: number;
  taskParentGuidId?: string;
  taskCreatedBy: string;
  taskTitle: string;
  taskDescription: string;
  taskProjectGuidId?: string;
  taskStatus?: string;
  taskType?: string;
  taskPriority?: string;
}

export interface IGetTaskForUser {
  userGuidId: string;
}

export interface ITaskDetails {
  id: number;
  taskParentId: number;
  taskGuidId: string;
  taskParentGuidId: string;
  taskCreatedBy: string;
  taskTitle: string;
  taskDescription: string;
  taskProjectGuidId: string;
  taskStatus: string;
  taskType: string;
  taskPriority: string;
  taskDeleted: number;
  taskCreatedDate: string;
  taskUpdatedDate: string;
  taskDueDate: string;
}
