import { CanActivateFn, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router, private toast: NgToastService) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['pages/login-user']);
        return false;
      }
    }
  }

/*export const authGuard: CanActivateFn = (route, state) => {
    return false;
};*/