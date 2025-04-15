import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  error: string = '';
  url = 'http://localhost:5000/api/employees/login';
  constructor(private auth:ServiceService,
    private router: Router,  private http: HttpClient,){}

    login() {
      console.log("Email",this.email);
      this.http.post<any>(this.url, {email:this.email }).subscribe({
        next: (user) => {
          this.auth.setUser(user);
          this.router.navigate([`/${user.role}`]);
        },
        error: () => {
          this.error = 'Invalid email or user not found.';
        }
      });
    }
}
