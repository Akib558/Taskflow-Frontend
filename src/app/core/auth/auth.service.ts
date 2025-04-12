import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isAuthenticated = false;

    constructor(private router: Router) {}

    login(credentials: { username: string; password: string }): boolean {
        // Implement your login logic here
        this.isAuthenticated = true;
        localStorage.setItem('isLoggedIn', 'true');
        return true;
    }

    register(userData: any): boolean {
        // Implement your registration logic here
        return true;
    }

    logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    }

    isLoggedIn(): boolean {
        return true;
        return (
            this.isAuthenticated ||
            localStorage.getItem('isLoggedIn') === 'true'
        );
    }
}
