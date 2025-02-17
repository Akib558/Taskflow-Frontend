import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/homepage/sidebar/sidebar.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NavbarComponent,
        SidebarComponent,
        KanbanBoardComponent,
        HomepageComponent,
        LayoutComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
})
export class AppComponent {
    title = 'Taskflow-Frontend';
}
