import { Component } from '@angular/core';
import { LoginService } from '../../../../core/services/login-service';

@Component({
  selector: 'app-suspendido-error',
  imports: [],
  templateUrl: './suspendido-error.html',
  styleUrl: './suspendido-error.css'
})
export class SuspendidoError {

  constructor(private loginService: LoginService) { }


  public logout() {
    this.loginService.logout();
    window.location.href = '/login';
  }

}
