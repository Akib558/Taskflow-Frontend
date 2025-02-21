import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IGetTaskForUser, ITask } from '../../models/task.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  addTask(taskData: ITask): Observable<any> {
    return this.http.post(environment.addTask, taskData);
  }

  getAllTaskForUser(getTaskReqObj: IGetTaskForUser): Observable<any> {
    return this.http.post(environment.getAllTask, getTaskReqObj);
  }
}
