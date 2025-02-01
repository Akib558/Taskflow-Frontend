import { Component, OnInit } from '@angular/core';

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

    constructor() {}

    ngOnInit(): void {
        this.getUserInfo();
    }

    getUserInfo() {

    }
}
