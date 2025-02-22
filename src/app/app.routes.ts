import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { KanbanBoardComponent } from './components/kanbanboard/kanbanboard.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

export const routes: Routes = [
  // ✅ Added 'export'
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home
  { path: 'home', component: HomepageComponent },
  { path: 'kanban', component: KanbanBoardComponent },
  {
    path: 'tasks',
    component: TasklistComponent,
  },
];
