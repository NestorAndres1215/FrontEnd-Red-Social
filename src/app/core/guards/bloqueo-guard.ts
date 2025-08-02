import { LoginService } from '../services/login-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class bloqueoGuard implements CanActivate {
constructor(private loginService: LoginService, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.loginService.getCurrentUser().pipe(
      map((user: any) => {
        const estado = user?.estado;
        console.log('Estado desde el guard:', estado);

        if (estado === 'BLOQUEADO') {
          console.log("Redirigiendo a cuenta-bloqueada");
          return this.router.createUrlTree(['cuenta-bloqueada']);
        }

        return true;
      }),
      catchError((error) => {
        console.error('Error al obtener usuario:', error);
        return of(this.router.createUrlTree(['/login']));
      })
    );
  }
};
