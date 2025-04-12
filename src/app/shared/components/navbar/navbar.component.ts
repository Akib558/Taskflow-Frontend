import { Component } from '@angular/core';
import { TaskFormComponent } from '../../../features/tasks/components/task-form/task-form.component';

@Component({
  selector: 'app-navbar',
  imports: [TaskFormComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
