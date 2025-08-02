import { Component } from '@angular/core';
import { LoginService } from '../../../../core/services/login-service';

@Component({
  selector: 'app-suspencion-pag-esperar',
  imports: [],
  templateUrl: './suspencion-pag-esperar.html',
  styleUrl: './suspencion-pag-esperar.css'
})
export class SuspencionPagEsperar {
  constructor( private loginService:LoginService){}
  public logout() {
    this.loginService.logout();
    window.location.href = '/login';
  }

}
