import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component'; // Ensure this path is correct
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

    {
        path: 'home',
        component: HomepageComponent,
    },
    {
        path: 'kanban',
        component: KanbanBoardComponent,
    },
    {
        path: 'tasklist',
        component: TaskComponent,
    },
];
