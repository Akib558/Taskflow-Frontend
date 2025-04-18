import { Component } from '@angular/core';
import { TaskFormComponent } from '../../../features/tasks/components/task-form/task-form.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [TaskFormComponent],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(private router: Router) {
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    }
}
