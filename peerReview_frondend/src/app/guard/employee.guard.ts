import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../auth/service.service';
import { inject } from '@angular/core';

export const employeeGuard: CanActivateFn = (route, state) => {
  
    const auth =inject(ServiceService);
    const router = inject(Router);
    const role = auth.getRole();
  
    if(role === 'employee'){
      return true;
    }
    else{
      router.navigate(['/login'])
      return false;
    }
};
