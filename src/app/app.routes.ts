import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './features/tasks/components/task-form/task-form.component';

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
    children: [
      {
        path: 'home', // working
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'tasks',
    component: MainLayoutComponent,
    children: [
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
    ],
  },

  { path: '**', redirectTo: 'home' },
];
