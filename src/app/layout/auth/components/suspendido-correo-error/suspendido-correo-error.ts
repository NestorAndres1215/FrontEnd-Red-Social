import { Component } from '@angular/core';
import { LoginService } from '../../../../core/services/login-service';
import { ValidacionesService } from '../../../../core/services/validaciones-service';
import { MensajeService } from '../../../../core/services/mensaje-service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspendido-correo-error',
  imports: [ReactiveFormsModule],
  templateUrl: './suspendido-correo-error.html',
  styleUrl: './suspendido-correo-error.css'
})
export class SuspendidoCorreoError {
  public formulario!: UntypedFormGroup;
  ngOnInit(): void {

    this.initForm()
  }
  initForm(): void {
    this.formulario = this.formBuilder.group({

      email: [''],

    });
  }

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: UntypedFormBuilder,
    private validacionesService: ValidacionesService,
    private mensaje: MensajeService) { }
  operar() {
    const emailFormulario = this.formulario.get('email')?.value;
    const correo = this.loginService.getUser()?.correo;

    console.log('📧 Email del formulario:', emailFormulario);
    console.log('📧 Correo del usuario:', correo);

    if (!correo) {
      console.warn('❌ Correo del usuario no definido');
      return;
    }

    if (!emailFormulario) {
      this.mensaje.MostrarError('El campo de email está vacío');
      return;
    }

    if (!this.validacionesService.validarCorreo(emailFormulario)) {
      this.mensaje.MostrarError('El correo ingresado no es válido');
      return;
    }

    if (emailFormulario !== correo) {
      this.mensaje.MostrarError('El correo ingresado no coincide con el registrado');
      return;
    }

    //
    this.loginService.revisionPorCorreo(correo).subscribe({
      next: (res) => {
        console.log('Resultado de la validación del backend:', res);
        // continuar lógica según respuesta
        this.loginService.setProcesoVerificacion(true);
        this.router.navigate(['verificacion-cuenta']);
      },
      error: (err) => {
        this.mensaje.MostrarError('Error al validar con el servidor');
      }
    });
  }

}
