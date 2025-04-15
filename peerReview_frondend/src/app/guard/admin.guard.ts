import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../auth/service.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const auth =inject(ServiceService);
  const router = inject(Router);
  const role = auth.getRole();

  if(role === 'admin'){
    return true;
  }
  else{
    router.navigate(['/login'])
    return false;
  }
  
};
