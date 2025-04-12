import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TaskListComponent,
  },
  {
    path: 'new',
    pathMatch: 'full',
    component: TaskFormComponent,
  },
  {
    path: ':id',
    component: TaskDetailComponent,
  },
  {
    path: ':id/edit',
    component: TaskFormComponent,
    data: { mode: 'edit' },
  },
];

// Add this export if you're using a standalone route module with `loadChildren`
export default {
  providers: [provideHttpClient()],
  routes: TASK_ROUTES,
};
