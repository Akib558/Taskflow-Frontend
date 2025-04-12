export interface Task {
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

export interface ApiTask {
    id: number;
    taskGuidId: string;
    taskParentId?: number;
    taskParentGuidId?: string;
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
    taskDueDate?: string;
}
