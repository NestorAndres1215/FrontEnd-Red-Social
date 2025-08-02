import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { LoginService } from '../services/login-service';

@Injectable({
  providedIn: 'root'
})
export class ModeradorGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    
    if (!this.loginService.isLoggedIn() || this.loginService.getUserRole() !== 'MODERADOR') {
      this.router.navigate(['/moderador']);
      return of(false);
    }
    console.log("hola")
    // Verificamos el estado del usuario desde el backend
    return this.loginService.getCurrentUser().pipe(
      map((user: any) => {
        if (user.estado === 'BLOQUEADO') {
          return this.router.parseUrl('/cuenta-bloqueada');
        }
        else if (user.estado == 'SUSPENDIDO') {
          return this.router.parseUrl('/cuenta-suspendida');
        }

        return true; // acceso permitido
      }),
      catchError((error: any) => {
        console.error('Error al obtener el usuario en AdministradorGuard:', error);
        return of(this.router.parseUrl('/login'));
      })
    );
  }

}