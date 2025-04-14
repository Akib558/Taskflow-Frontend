import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', //working
        pathMatch: 'full',
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            // working
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ],
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home', // working
                component: HomeComponent,
            },
            {
                path: 'tasks',
                loadChildren: () =>
                    import('./features/tasks/tasks.routes').then(
                        (m) => m.TASK_ROUTES
                    ),
            },
        ],
    },
    { path: '**', redirectTo: 'home' },
];
