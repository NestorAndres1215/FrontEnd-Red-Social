import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login-service';
import { Observable, of } from 'rxjs';
import { Login } from '../../layout/auth/components/login/login';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root' // 👈 Muy importante
})
export class VerificacionGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const enProceso = this.loginService.enProcesoDeVerificacion();

    if (enProceso) {
      return true;
    }

    this.router.navigate(['/login']);
    
    return false;
  }
}