import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../core/services/login-service';
import { SuspensionesService } from '../../../../core/services/suspensiones-service';
import { ValidacionesService } from '../../../../core/services/validaciones-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspendido-error',
  imports: [],
  templateUrl: './suspendido-error.html',
  styleUrl: './suspendido-error.css'
})
export class SuspendidoError implements OnInit {


  constructor(private loginService: LoginService, 
    private suspensionesService: SuspensionesService, private router:Router,
    private validacionService: ValidacionesService) { }
  ngOnInit(): void {

    console.log(this.loginService.getUser().codigo);
    const username = this.loginService.getUser().codigo;
    this.listar(username)

  }


  public logout() {
    this.loginService.logout();
    window.location.href = '/login';
  }

  oponer() {
    this.router.navigate(['verificacion-correo']);
  }
  fecha: string = '';

  listar(username: string) {
    this.suspensionesService.listarPorUsuario(username).subscribe({
      next: (data) => {
        console.log('Suspensiones del usuario:', data);

        const fechaSuspension = data.map(m => m.fecha_suspension);
        console.log(fechaSuspension);
        if (fechaSuspension.length > 0) {
          this.fecha = this.validacionService.formatearFecha(fechaSuspension[0]);
        } else {
          this.fecha = 'Sin fecha';
        }

        console.log(this.fecha);
      },
      error: (err) => {
        console.error('Error al obtener suspensiones', err);
      }
    });
  }


}
