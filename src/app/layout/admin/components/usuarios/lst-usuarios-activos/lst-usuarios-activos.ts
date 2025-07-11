import { Component } from '@angular/core';
import { Table } from "../../../../../shared/components/table/table";
import { MatDialog } from '@angular/material/dialog';
import { ModalEliminacion } from '../../../../../shared/components/modal/modal-eliminacion/modal-eliminacion';
import { LoginService } from '../../../../../core/services/login-service';
import { AdminService } from '../../../../../core/services/admin-service';
import { ModalVisor } from '../../../../../shared/components/modal/modal-visor/modal-visor';
import { RegUsuario } from '../reg-usuario/reg-usuario';


@Component({
  selector: 'app-lst-usuarios-activos',
  imports: [Table],
  templateUrl: './lst-usuarios-activos.html',
  styleUrl: './lst-usuarios-activos.css'
})
export class LstUsuariosActivos {

  iconoUsuarios: string = 'fas fa-users';
  tituloUsuarios: string = 'Mantenimiento de Usuarios';
  columnas: string[] = ['Usuario', 'Nombre', 'Apellido', 'Correo', 'Telefono', 'Edad'];
  constructor(
    private login: LoginService, private admin: AdminService,
    private dialog: MatDialog,) { }

  datos: any[] = [];

  botonesConfig = {
    registrar: true,
    ver: true,
    actualizar: true,
    eliminar: true,
    imprimir: true,
    exportarPDF: true,
    exportarExcel: true
  };
  user: any = null;
  username: string = '';
  ngOnInit() {
    this.user = this.login.getUser();
    this.username = this.user.username;

    this.listarUsuarios("hola");
  }
  listarUsuarios(username: string) {
    console.log('Listar Usuarios', username);
    this.admin.listarAdminsActivosExcluyendo(username).subscribe({
      next: (respuesta: any[]) => {
        this.datos = respuesta;
        console.log('Datos obtenidos:', this.datos);
      },
      error: (error) => {
        console.error('Error al listar usuarios:', error);
      }
    });
  }



  registrar() {
    console.log(this.username);
    const dialogRef = this.dialog.open(RegUsuario, {
      disableClose: true,
     panelClass: 'custom-dialog'
    });

    dialogRef.afterClosed().subscribe(data => {
      this.listarUsuarios(this.username)
    })

  }

  ver(fila: any) {
    console.log('Ver Marca', fila);
    const dialogRef = this.dialog.open(ModalVisor, {
    
      width: '1050px',
      height: '450px',
      data: {
        titulo: 'Visualización de Usuario',
        columnas: this.columnas,
        fila: fila,
      }
    });
  }

  actualizar(fila: any) {
    console.log('Actualizar Marca', fila);
  }

  eliminar(fila: any): void {
    console.log('Imprimir Marca', fila);
    const dialogEliminar = this.dialog.open(ModalEliminacion, {
      disableClose: true,
      width: '700px',
      height: '318px',
      data: {
        fila,
        titulo: 'Desactivar Usuario',
        subtitulo: `¿Deseas desactivar el usuario ${fila.Nombre} ? `
      },
    });
  }

  imprimir(fila: any) {
    const usuario = fila;

    if (usuario) {
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentWindow?.document;

      const contenidoHTML = `
      <div style="padding: 40px; font-family: 'Segoe UI', Tahoma, sans-serif; color: #333;">


        <h1 style="text-align: center; color: #006699; margin-top: 40px; text-transform: uppercase; ">Constancia de Registro de Administrador</h1>

        <p style="margin-top: 30px; text-align: justify; font-size: 16px;">
          La presente constancia certifica que el trabajador descrito a continuación ha sido formalmente registrado en el sistema institucional de <strong>SOCIAL LIKE S.A.C.</strong>,
          desempeñando el cargo de <strong>Administrador</strong>. Esta constancia forma parte del expediente laboral del colaborador y valida la información vigente hasta la fecha de emisión.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 30px; font-size: 15px;">
          <tr style="background-color: #f0f4f8;">
            <td style="padding: 10px; font-weight: bold; width: 30%; border: 1px solid #ccc;">Nombre completo:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Nombre} ${usuario.Apellido}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Edad:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Edad} años</td>
          </tr>
          <tr style="background-color: #f0f4f8;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Usuario asignado:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Usuario}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Correo electrónico:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Correo}</td>
          </tr>
          <tr style="background-color: #f0f4f8;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Teléfono:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Telefono}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Fecha de nacimiento:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.FechaNacimiento}</td>
          </tr>

          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Código interno:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">${usuario.Codigo}</td>
          </tr>
          <tr style="background-color: #f0f4f8;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ccc;">Rol asignado:</td>
            <td style="padding: 10px; border: 1px solid #ccc;">Administrador</td>
          </tr>
        </table>

        <p style="margin-top: 40px; font-size: 15px; text-align: justify;">
          Esta constancia es generada automáticamente por el sistema institucional de <strong>SOCIAL LIKE S.A.C.</strong> y será válida únicamente para procesos internos. Para cambios o correcciones en los datos, comuníquese con el área correspondiente.
        </p>

        <div style="margin-top: 60px; display: flex; justify-content: space-between; font-size: 14px;">
          <div style="text-align: center; width: 45%;">
            <br>
            <p style="border-top: 1px solid #000; width: 80%; margin: 0 auto;"></p>
            <p style="margin-top: 5px;"><strong>Responsable de RRHH</strong></p>
          </div>

          <div style="text-align: center; width: 45%;">
           
            <br>
            <p style="border-top: 1px solid #000; width: 80%; margin: 0 auto;"></p>
            <p style="margin-top: 5px;"><strong>${usuario.Nombre} ${usuario.Apellido}</strong><br>Administrador</p>
          </div>
        </div>
      </div>
    `;

      iframeDoc?.open();
      iframeDoc?.write(`
      <html>
        <head>
          <title>Constancia de Registro - SOCIAL LIKE</title>
        </head>
        <body>
          ${contenidoHTML}
        </body>
      </html>
    `);
      iframeDoc?.close();
      iframe.contentWindow?.print();
      document.body.removeChild(iframe);
    }
  }



}
