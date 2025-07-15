import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../../../../core/services/login-service';
import { Router } from '@angular/router';
import { MensajeService } from '../../../../core/services/mensaje-service';
import { AdminService } from '../../../../core/services/admin-service';
@Component({
  selector: 'app-login',

  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    "username": '',
    "password": '',
  }


  constructor(
    private loginService: LoginService,
    private adminService: AdminService,
    private router: Router,
    private mensaje: MensajeService) { }
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  intentosFallidos: number = 0;
  formSubmit() {
    console.log(this.loginData)
    // Validar si el nombre de usuario está vacío o nulo
    if (this.loginData.username.trim() === '' || this.loginData.username.trim() === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo requerido',
        text: 'El nombre de usuario es requerido.',
      });
      return;
    }


    // Validar si la contraseña está vacía o nula
    if (this.loginData.password.trim() === '' || this.loginData.password.trim() === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo requerido',
        text: 'La contraseña es requerida.',
      });
      return;
    }

    this.intentosFallidos++;

    this.loginService.generateToken(this.loginData).subscribe({
      next: async (data: any) => {


        if (this.intentosFallidos >= 10) {

          const respuesta = await this.loginService.bloquearUsuario(this.loginData.username).toPromise();
          console.log(respuesta)
          Swal.fire({
            icon: 'error',
            title: 'Cuenta bloqueada',
            text: 'Has superado el número máximo de intentos fallidos. Tu cuenta ha sido bloqueada. Por favor, espera o contacta con el administrador.',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['cuenta-bloqueada']);

          localStorage.setItem('Bloqueo', 'true');
          console.log(localStorage.getItem('Bloqueo'));

          return;

        }

        localStorage.setItem('authToken', data.token);
        this.loginService.loginUser(data.token);


        this.loginService.getCurrentUser().subscribe({
          next: async (user) => {
            console.log(user)
            this.loginService.setUser(user);
            const userRole = this.loginService.getUserRole();


            const estado = (user as any).estado;


            if (estado == "BLOQUEADO") {
              console.log("ESTADO BLOQUEADO")
              this.router.navigate(['cuenta-bloqueada']);
            }
            else if (estado == "ACTIVO") {
              console.log(userRole)
              switch (userRole) {
                case 'ADMIN': {
                  this.router.navigate(['administrador']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Bienvenido, Administrador.',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }

                case 'NORMAL': {
                  this.router.navigate(['inicio']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Bienvenido, Profesor.',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }
                case 'MODERADOR': {
                  this.router.navigate(['moderador']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Bienvenido, Moderador.',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }


                default: {
                  // Cerrar sesión si el rol no es válido
                  this.loginService.logout();
                  Swal.fire({
                    icon: 'error',
                    title: 'Acceso denegado',
                    text: 'Rol no reconocido. Cierre de sesión.',
                    confirmButtonText: 'Aceptar'
                  });
                }
              }
            }
            else if (estado == "INACTIVO") {

              const codigo = (user as any).codigo;
              const respuesta = await this.adminService.activarAdmin(codigo).toPromise();
              if (respuesta == null) {
                Swal.fire({
                  icon: 'error',
                  title: 'Algo salió mal',
                  text: 'No pudimos activar tu cuenta en este momento. Por favor, intenta nuevamente más tarde.',
                  confirmButtonText: 'Entendido'
                });
                this.loginService.logout();
                return;
              }

              switch (userRole) {

                case 'ADMIN': {
                  this.router.navigate(['administrador']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: 'Cuenta activada correctamente',
                    text: 'Su cuenta ha sido reactivada con éxito. Bienvenido nuevamente al sistema.',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }


                case 'NORMAL': {
                  this.router.navigate(['inicio']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: '¡Todo listo!',
                    text: 'Tu cuenta ha sido activada con éxito. ¡Bienvenido de nuevo!',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }
                case 'MODERADOR': {
                  this.router.navigate(['moderador']);
                  this.loginService.loginStatusSubjec.next(true);
                  Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: 'Bienvenido, Moderador.',
                    timer: 2000,
                    timerProgressBar: true,
                  });
                  break;
                }
                default: {
                  this.loginService.logout();
                  Swal.fire({
                    icon: 'error',
                    title: 'Acceso denegado',
                    text: 'Rol no reconocido. Cierre de sesión.',
                    confirmButtonText: 'Aceptar'
                  });
                }

              }

            }
            else if (estado == "SUSPENDIDO") {
              console.log("cuenta suspendida")
              this.router.navigate(['cuenta-suspendida']);
            }
            else if (estado == "PENDIENTE") {

            }
            else if (estado == "INHABILITADO") {

            }
            else {
              console.warn("Estado no reconocido:", estado);
            }
          },
          error: (error) => {
            // Manejar error en la obtención del usuario
            this.mensaje.MostrarMensaje(error);
            console.error('Error en la obtención de usuario:', error);
            this.router.navigate(['login']);
          }
        });
      },

      error: (error) => {



        // Manejar error en la generación del token
        if (this.intentosFallidos >= 4) {
          Swal.fire({
            icon: 'error',
            title: 'Demasiados intentos fallidos',
            text: 'Has superado el número máximo de intentos. Por favor, inténtalo más tarde.',
            confirmButtonText: 'Aceptar'
          });


          return;

        }
        this.mensaje.MostrarBodyError(error);
        console.log(error)
      }
    });
  }
}
