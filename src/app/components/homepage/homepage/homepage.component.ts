import { Component, OnInit } from '@angular/core';
import { HomepageService} from '../../../services/homepage.service';
import {AuthService} from '../../../services/auth.service';

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
    standalone: true,
})
export class HomepageComponent implements OnInit {

    userInfo: Partial<User> = {};

    constructor(private homepageService: HomepageService) {}

    ngOnInit(): void {
        this.getUserInfo();
    }

    getUserInfo() {
        let accessToken = localStorage.getItem('accessToken');
        let guidId = localStorage.getItem('userGuidId')??"".toString();
        let req = {
            guidId : guidId
        };
        this.homepageService.getUserData(req).subscribe({
            next: (response) => {
                this.userInfo = response.Data;
                console.log(this.userInfo);
            },
            error: (error) => {
                console.log(error);
            }

        });
    }
}
