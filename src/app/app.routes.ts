import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomepageComponent} from './components/homepage/homepage/homepage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomepageComponent },
    { path: '**', redirectTo: 'login' }
];
