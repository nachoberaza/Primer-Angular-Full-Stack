import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private codeAuthentication: HardcodeAuthenticationService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let indicador = false;

    if (this.codeAuthentication.isUserLoggedIn()) {
      indicador = true;
    }else{
      this.router.navigate(['login']);
    }


    return indicador;
  }


}
