import { LoginService } from '../services/login-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }
  canActivate(): Observable<boolean | UrlTree> {
    const user = this.loginService.getUser();
    console.log(user.estado)
    if (!user || !this.loginService.isLoggedIn() || this.loginService.getUserRole() !== 'ADMIN') {
      return of(this.router.parseUrl('/inicio'));
    } else if (user.estado == 'BLOQUEADO') {
      return of(this.router.parseUrl('/cuenta-bloqueada'));
    } else if (user.estado == 'SUSPENDIDO') {
      console.log("aqui entro")
      return of(this.router.parseUrl('/cuenta-suspendida'));
    } else {

      return of(true);
    }
  }

}