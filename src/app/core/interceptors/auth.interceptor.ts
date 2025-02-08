import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);  // Inject AuthService
    const authToken = authService.getToken(); // Get token from service

    if (authToken) {
        // Clone request and add Authorization header
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`,
            },
        });
    }

    return next(req);
};
