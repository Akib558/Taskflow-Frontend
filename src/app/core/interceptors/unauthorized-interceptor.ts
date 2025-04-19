// src/app/interceptors/unauthorized.interceptor.ts
import { HttpErrorResponse, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

export function unauthorizedInterceptor(
    request: HttpRequest<unknown>,
    next: HttpHandlerFn
) {
    const authService = inject(AuthService);
    const router = inject(Router);

    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                authService.logout();
                router.navigate(['/login'], {
                    queryParams: { returnUrl: router.url },
                    replaceUrl: true
                });
            }
            return throwError(() => error);
        })
    );
}
