import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../core/services/login-service';
import { CommonModule } from '@angular/common';
import { VerificacionService } from '../../../../core/services/verificacion-service';
import { Verificacion } from '../../../../core/models/verificacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bloqueo-error',
  imports: [CommonModule],
  templateUrl: './bloqueo-error.html',
  styleUrl: './bloqueo-error.css'
})
export class BloqueoError implements OnInit {

  correoEnmascarado: string = '';


  constructor(
    private router: Router,
    private loginService: LoginService,
    private verificacionService: VerificacionService
  ) {

  }
  user: any = null;
  correo: string = '';
  usuario: string = '';
  ngOnInit(): void {

    this.user = this.loginService.getUser();
    this.correo = this.user.correo;
    this.usuario = this.user.username
    this.correoEnmascarado = this.maskEmail(this.correo);
  }

  maskEmail(email: string): string {
    const [localPart, domain] = email.split('@');
    if (localPart.length <= 2) {
      return '*@' + domain; // Para correos muy cortos
    }

    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];
    const maskedMiddle = '*'.repeat(localPart.length - 2);

    return `${firstChar}${maskedMiddle}${lastChar}@${domain}`;
  }

  isLoggedIn = false;
  public logout() {
    this.loginService.logout();
    window.location.href = '/login';
  }
  enviar() {
    console.log(this.usuario)
    const objVerifiacion: Verificacion = {
      correo: this.correo,
      usuario: this.usuario
    }
    this.verificacionService.enviarCodigoVerificacion(objVerifiacion).subscribe({
      next: (resp) => {
        console.log('Código enviado:', resp);
        this.router.navigate(['/codigo-verificacion']);
      },
      error: (err) => {
        console.error('Error al enviar el código:', err);
      }
    });
  }
}
