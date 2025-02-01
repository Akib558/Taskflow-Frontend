import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(reqData: {email: string, password: string}): Observable<any> {
        return this.http.post(environment.loginUrl, reqData);
    }

    getUserData(reqData: {guidId: string}): Observable<any> {
        return this.http.post(environment.getUserInfoUrl, reqData);
    }
}
1
