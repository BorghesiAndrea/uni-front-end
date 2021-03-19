import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private tokenStorageService: TokenStorageService) {
     }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (!!this.tokenStorageService.getToken())
      return true;
    this.router.navigate(['login']);
    return false;
  }

}