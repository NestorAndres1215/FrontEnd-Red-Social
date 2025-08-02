import { CanLoad, Router } from "@angular/router";
import { LoginService } from "../services/login-service";
import { Injectable } from "@angular/core";
import { SuspensionesService } from "../services/suspensiones-service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router, private suspensionesService: SuspensionesService) { }
  async canLoad(): Promise<boolean> {
    if (this.loginService.isLoggedIn()) {
      const user = this.loginService.getUser();
      const username = user.correo;

      try {
        const revisiones: any[] = await this.loginService.listarRevisionesPorCorreo(username).toPromise();

        if (revisiones.length > 0) {
          const estadoRevision = revisiones[0].observacion;

          // ✅ Redirige si tiene revisión pendiente
          if (estadoRevision === 'PENDIENTE') {
            this.router.navigate(['verificacion-cuenta']);
            return false;
          }
        }

        // ✅ Redirige si está bloqueado
        if (user.estado === 'BLOQUEADO') {
          this.router.navigate(['cuenta-bloqueada']);
          return false;
        }
        else if (user.estado === 'SUSPENDIDO') {
          this.router.navigate(['cuenta-suspendida']);
          return false;
        }

        // ✅ Redirige según el rol
        const role = this.loginService.getUserRole();
        const destino =
          role === 'ADMIN' ? '/administrador' :
            role === 'MODERADOR' ? '/moderador' :
              role === 'NORMAL' ? '/inicio' :
                '/login';

        this.router.navigate([destino]);
        return false; // Ya navegó a otro lugar, no debe cargar el módulo protegido
      } catch (error) {
        console.error('Error al obtener revisiones:', error);
        // Puedes redirigir a un error general si lo deseas
        this.router.navigate(['/error']);
        return false;
      }
    }

    return true; // No está logueado, puede continuar a la ruta pública
  }

}