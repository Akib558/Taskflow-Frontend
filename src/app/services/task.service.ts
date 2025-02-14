import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ITask } from '../interfaces/task/task.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private http: HttpClient) {}

    addTask(taskData: ITask): Observable<any> {
        return this.http.post(environment.addTask, taskData);
    }
}
