import { Router, RouterModule } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  changePage(pageName: string) {
    this.router.navigate([pageName]);
  }
}
