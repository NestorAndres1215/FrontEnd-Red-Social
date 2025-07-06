import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../../../../core/services/login-service';
import { Router } from '@angular/router';
import { MensajeService } from '../../../../core/services/mensaje-service';
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
    private router: Router,
    private mensaje: MensajeService) { }
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

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
    // Validar si el nombre de usuario tiene menos de 3 caracteres
    if (this.loginData.username.trim().length < 3) {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre de usuario inválido',
        text: 'El nombre de usuario debe tener al menos 3 caracteres.',
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

    // Validar si la contraseña tiene menos de 6 caracteres
    if (this.loginData.password.trim().length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseña inválida',
        text: 'La contraseña debe tener al menos 6 caracteres.',
      });
      return;
    }


    // Realizar la llamada al servicio para generar el token
    this.loginService.generateToken(this.loginData).subscribe({
      next: (data: any) => {
        console.log(data.token);

        // Guardar el token en localStorage y en el servicio
        localStorage.setItem('authToken', data.token);

        this.loginService.loginUser(data.token);

        // Obtener el usuario actual después de iniciar sesión
        this.loginService.getCurrentUser().subscribe({
          next: (user) => {
            console.log(user)
            this.loginService.setUser(user);

            // Redirigir según el rol del usuario
            const userRole = this.loginService.getUserRole();
            console.log(userRole)
            //            // Verificar el rol del usuario y redirigir a la página correspondiente
            switch (userRole) {

              case 'ADMIN':
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



              case 'NORMAL':
                this.router.navigate(['profesor']);
                this.loginService.loginStatusSubjec.next(true);
                Swal.fire({
                  icon: 'success',
                  title: '¡Bienvenido!',
                  text: 'Bienvenido, Profesor.',
                  timer: 2000,
                  timerProgressBar: true,
                });
                break;

              default:
                // Cerrar sesión si el rol no es válido
                this.loginService.logout();
                Swal.fire({
                  icon: 'error',
                  title: 'Acceso denegado',
                  text: 'Rol no reconocido. Cierre de sesión.',
                  confirmButtonText: 'Aceptar'
                });

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
        console.error('Error al iniciar sesión:', error);
        this.mensaje.MostrarBodyError(error);

      }
    });
  }
}
