import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbartopComponent } from '../navbartop/navbartop.component';

@Component({
  selector: 'app-layout',
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterModule,
    // NavbartopComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
