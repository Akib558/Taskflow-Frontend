import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component'; // Ensure this path is correct
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },

    {
        path: 'home',
        component: HomepageComponent, // Homepage as parent to contain sidebar
        children: [
            { path: '', redirectTo: 'kanban', pathMatch: 'full' }, // Default to kanban if 'home'
            { path: 'kanban', component: KanbanBoardComponent }, // Kanban inside homepage
        ],
    },

    { path: 'kanban', redirectTo: 'home/kanban', pathMatch: 'full' }, // Redirect from '/kanban' to '/home/kanban'
];
