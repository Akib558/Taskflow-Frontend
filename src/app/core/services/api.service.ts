import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    // Generic GET request
    get<T>(endpoint: string, params?: any): Observable<T> {
        const httpParams = this.createHttpParams(params);
        return this.http
            .get<T>(`${this.baseUrl}${endpoint}`, { params: httpParams })
            .pipe(catchError(this.handleError));
    }

    // Generic POST request
    post<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .post<T>(`${this.baseUrl}${endpoint}`, body, {
                headers: this.getHeaders(),
                withCredentials: true
            })
            .pipe(catchError(this.handleError));
    }

    // Generic PUT request
    put<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .put<T>(`${this.baseUrl}${endpoint}`, body, {
                headers: this.getHeaders()
            })
            .pipe(catchError(this.handleError));
    }

    patch<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .patch<T>(`${this.baseUrl}${endpoint}`, body, {
                headers: this.getHeaders()
            })
            .pipe(catchError(this.handleError));
    }

    // Generic DELETE request
    delete<T>(endpoint: string): Observable<T> {
        return this.http
            .delete<T>(`${this.baseUrl}${endpoint}`, {
                headers: this.getHeaders()
            })
            .pipe(catchError(this.handleError));
    }

    // Handle file uploads
    uploadFile<T>(
        endpoint: string,
        file: File,
        formDataName = 'file'
    ): Observable<T> {
        const formData = new FormData();
        formData.append(formDataName, file);
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, formData);
    }

    // Helper methods
    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });

        // Add auth token if available
        const token = localStorage.getItem('auth_token');
        if (token) {
            return headers.append('Authorization', `Bearer ${token}`);
        }
        return headers;
    }

    private createHttpParams(params: any): HttpParams {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => {
                if (params[key] !== null && params[key] !== undefined) {
                    httpParams = httpParams.append(key, params[key].toString());
                }
            });
        }
        return httpParams;
    }

    private handleError(error: any) {
        let errorMessage = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}
