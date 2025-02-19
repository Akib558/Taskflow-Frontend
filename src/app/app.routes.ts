import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TaskComponent } from './components/task/task.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomepageComponent,
        canActivate: [AuthGuard], // Protect the parent route
        children: [
            { path: 'kanban', component: KanbanBoardComponent },
            { path: 'tasklist', component: TaskComponent },
            { path: '', redirectTo: 'kanban', pathMatch: 'full' }, // Default child route
        ],
    },
    { path: '**', redirectTo: 'login' }, // Redirect to login for unknown routes
];
