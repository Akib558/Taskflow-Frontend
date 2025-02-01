import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {HomepageComponent} from '../homepage/homepage/homepage.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.component.html',
    standalone: true,
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    user = {
        email: '',
        password: ''
    };

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmit(){
        console.log("Submitting", this.user);

        this.authService.login(this.user).subscribe({
            next: (response) => {
                console.log(response);
                localStorage.setItem('accessToken', response.Data.token.accessToken);
                localStorage.setItem('refreshToken', response.Data.token.refreshToken);
                localStorage.setItem('userGuidId', response.Data.userInfo.guidId)
                this.router.navigate(['home']);
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
}
