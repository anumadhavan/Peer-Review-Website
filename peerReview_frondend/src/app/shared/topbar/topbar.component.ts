import { Component } from '@angular/core';
import { ServiceService } from '../../auth/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  role:string |null = null;

  constructor(private authService : ServiceService){

    this.role = this.authService.getRole();
  }

  logout(){
    this.authService.logout();
  }

}
