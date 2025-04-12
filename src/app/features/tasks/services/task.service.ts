import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Task } from '../models/task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private readonly endpoint = 'tasks'; // API endpoint

    constructor(private api: ApiService) {}

    getTasks(params?: {
        completed?: boolean;
        priority?: 'low' | 'medium' | 'high';
        dueBefore?: Date;
        dueAfter?: Date;
    }): Observable<Task[]> {
        const queryParams: any = { ...params };
        if (params?.dueBefore)
            queryParams.dueBefore = params.dueBefore.toISOString();
        if (params?.dueAfter)
            queryParams.dueAfter = params.dueAfter.toISOString();

        return this.api.get<Task[]>(this.endpoint, queryParams);
    }

    getTask(id: string): Observable<Task> {
        return this.api.get<Task>(`${this.endpoint}/${id}`);
    }

    createTask(task: Omit<Task, 'id'>): Observable<Task> {
        return this.api.post<Task>(this.endpoint, task);
    }

    updateTask(id: string, task: Partial<Task>): Observable<Task> {
        return this.api.put<Task>(`${this.endpoint}/${id}`, task);
    }

    deleteTask(id: string): Observable<void> {
        return this.api.delete<void>(`${this.endpoint}/${id}`);
    }

    uploadAttachment(taskId: string, file: File): Observable<{ url: string }> {
        return this.api.uploadFile<{ url: string }>(
            `${this.endpoint}/${taskId}/attachments`,
            file
        );
    }

    setTaskCompletion(id: string, completed: boolean): Observable<Task> {
        return this.api.patch<Task>(`${this.endpoint}/${id}/status`, {
            completed,
        });
    }
}
