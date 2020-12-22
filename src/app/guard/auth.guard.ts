import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }
  canActivate(){
    if (this.authService.isUserLoggedIn){
      return true;
    } else {
      window.alert('Permission denied for this page');
      return false;
    }
  }
}
