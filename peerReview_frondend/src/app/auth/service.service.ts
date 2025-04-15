/*import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private role: 'admin' |'employee' |null = null;

  constructor(private router:Router ) { }

  setRole(role:'admin' | 'employee'){
    this.role = role;
    localStorage.setItem('userRole',role);
  }

  getRole():'admin' |'employee' | null {
    if(!this.role){
      this.role= localStorage.getItem('userRole') as 'admin' |'employee' |null;
    }
    return this.role;
  }

  isLoggedIn():boolean{
    return !! this.getRole();
  }

  logout(){
    this.role = null;
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }
}*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  private user: any = null;

  constructor(private router: Router) {}

  setUser(user: { _id: string; role: 'admin' | 'employee'; name: string }) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any {
    if (!this.user) {
      const saved = localStorage.getItem('user');
      this.user = saved ? JSON.parse(saved) : null;
    }
    return this.user;
  }

  getUserId(): string | null {
    return this.getUser()?._id || null;
  }

  getRole(): 'admin' | 'employee' | null {
    return this.getUser()?.role || null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

