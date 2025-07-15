import { Component, OnInit } from '@angular/core';
import { VerificacionService } from '../../../../core/services/verificacion-service';
import { LoginService } from '../../../../core/services/login-service';
import { Verificacion, VerificacionCodigo } from '../../../../core/models/verificacion';
import { Router } from '@angular/router';
import { MensajeService } from '../../../../core/services/mensaje-service';

@Component({
  selector: 'app-codigo-verificacion',
  imports: [],
  templateUrl: './codigo-verificacion.html',
  styleUrl: './codigo-verificacion.css'
})
export class CodigoVerificacion implements OnInit {
  user: any;
  correo: string = '';
  constructor(
    private loginService: LoginService, private router: Router, private mensaje: MensajeService,
    private verificacionService: VerificacionService
  ) {

  }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    this.correo = this.user.correo;
  }

  async enviarCodigo(n1: string, n2: string, n3: string, n4: string, n5: string, n6: string) {
    console.log(n1 + n2 + n3 + n4 + n5 + n6)
    const codigo = n1 + n2 + n3 + n4 + n5 + n6
    const objVerifiacion: VerificacionCodigo = {
      correo: this.correo,
      codigo: codigo
    }

    this.verificacionService.verificarCodigo(objVerifiacion).subscribe({
      next: (resp) => {
        console.log(resp)
        this.mensaje.MostrarMensaje("SE HA DESBLOQUEADO LA CUENTA")
        this.loginService.logout()
        this.router.navigate(['/login']);
      },
    });
  }



  autoFocusNext(event: any, nextInput: HTMLInputElement) {
    if (event.target.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }


  usuario: string = '';
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
  public logout() {
    this.loginService.logout();
    window.location.href = '/login';
  }
}
