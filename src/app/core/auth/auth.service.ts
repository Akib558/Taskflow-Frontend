import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router, private apiSerVice: ApiService) {}

  login(credentials: { username: string; password: string }): boolean {
    // Implement your login logic here
    console.log('Login credentials:', credentials);
    this.apiSerVice.post('Auth/login', credentials).subscribe(
      (response: any) => {
        console.log('Login response:', response);
        if (response.Success) {
          this.isAuthenticated = true;
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/home']);
        } else {
          console.error('Login failed');
        }
      },
      (error) => {
        console.error('Login error:', error);
        // Handle login error here
        alert('Login failed. Please check your credentials.');
        this.isAuthenticated = false;
        localStorage.setItem('isLoggedIn', 'false');
        this.router.navigate(['/login']);
      }
    );
    return false;
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
    // return true;
    return (
      this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true'
    );
  }
}
