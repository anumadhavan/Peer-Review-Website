import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../auth/service.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, TopbarComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  role:string|null;
  sidebarOpen:boolean = true;

  constructor(private authService:ServiceService){
    this.role = this.authService.getRole();
  }

  toggleSideBar(){
    this.sidebarOpen=!this.sidebarOpen;
  }
}
