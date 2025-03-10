import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            return true; // Allow access to the route
        } else {
            this.router.navigate(['/login']); // Redirect to login
            return false; // Block access to the route
        }
    }
}
