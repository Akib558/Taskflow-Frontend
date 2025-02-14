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
