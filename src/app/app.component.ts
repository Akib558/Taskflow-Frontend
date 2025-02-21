import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { KanbanBoardComponent } from './components/kanbanboard/kanbanboard.component';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    // NavbarComponent,
    // HomepageComponent,
    // SidebarComponent,
    // KanbanBoardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Taskflow-Frontend';
}
