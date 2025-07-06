import { CanLoad, Router } from "@angular/router";
import { LoginService } from "../services/login-service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class LoginGuard implements CanLoad {
    constructor(private loginService: LoginService, private router: Router) {}
  
    canLoad(): boolean {
      if (this.loginService.isLoggedIn()) {
        const role = this.loginService.getUserRole();
       this.router.navigate([role === 'ADMIN' ? '/administrador' : '/user-dashboard']);
        return false;
      }
      return true;
    }
  }