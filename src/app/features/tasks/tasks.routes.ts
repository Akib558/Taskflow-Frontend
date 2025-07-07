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
        path: 'taskform',
        pathMatch: 'full',
        component: TaskFormComponent
    },
    {
        path:'taskdetails',
        pathMatch: 'full',  
        component: TaskDetailComponent,
        
    },
        {
        path: ':id',
                pathMatch: 'full',  
        component: TaskDetailComponent,
    },
    {
        path: ':id/edit',
                pathMatch: 'full',  
        component: TaskFormComponent,
        data: { mode: 'edit' },
    },

];

export default {
    providers: [provideHttpClient()],
    routes: TASK_ROUTES,
};
