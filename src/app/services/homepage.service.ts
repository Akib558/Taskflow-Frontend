import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomepageService {

    constructor(private http: HttpClient) {
    }

    getUserData(reqData: { guidId: string }, headers: any): Observable<any> {
        return this.http.post(environment.getUserInfoUrl, reqData, {headers});
    }
}
