import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../../../services/homepage.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { KanbanBoardComponent } from '../../kanban-board/kanban-board.component';
import { TaskComponent } from '../../task/task.component';

interface User {
    id: number;
    guidId: string;
    username: string;
    email: string;
    passwordHash: string | null;
    role: string;
    createdDate: string; // Or Date if you want to parse it
}

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    imports: [
        NavbarComponent,
        SidebarComponent,
        KanbanBoardComponent,
        RouterModule,
        TaskComponent,
    ],
    standalone: true,
})
export class HomepageComponent implements OnInit {
    userInfo: Partial<User> = {};

    constructor(
        private homepageService: HomepageService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getUserInfo();
    }

    getUserInfo() {
        let accessToken = localStorage.getItem('accessToken');
        let guidId = localStorage.getItem('userGuidId') ?? ''.toString();
        let req = {
            guidId: guidId,
        };
        const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`, // Attach token
        });

        this.homepageService.getUserData(req, headers).subscribe({
            next: (response) => {
                this.userInfo = response.Data;
                console.log(this.userInfo);
            },
            error: (error) => {
                this.router.navigate(['login']);
            },
        });
    }
}
