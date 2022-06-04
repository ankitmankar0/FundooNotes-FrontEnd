import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthguardService } from './services/authService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Authservice:AuthguardService, private router: Router) {}
  canActivate(): boolean{
    if (!this.Authservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authservice.gettoken();
}
}
