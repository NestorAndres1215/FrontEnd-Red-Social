import { Component } from '@angular/core';
import { NormalService } from '../../../../../../core/services/normal-service';
import { Normal } from '../../../../../../core/models/normal';
import { Table } from "../../../../../../shared/components/table/table";

@Component({
  selector: 'app-lst-usuarios-inactivos',
  imports: [Table],
  templateUrl: './lst-usuarios-inactivos.html',
  styleUrl: './lst-usuarios-inactivos.css'
})
export class LstUsuariosInactivos {
  tituloUsuarios: string = 'Mantenimiento de Usuarios Inactivo';
  iconoUsuarios: string = 'fas fa-user-slash';
  columnas = [
    { etiqueta: 'Usuario', clave: 'usuario.username' },
    { etiqueta: 'Nombre', clave: 'nombre' },
    { etiqueta: 'Apellido', clave: 'apellido' },
    { etiqueta: 'Correo', clave: 'correo' },
    { etiqueta: 'Teléfono', clave: 'telefono' },
    { etiqueta: 'Edad', clave: 'edad' },
    { etiqueta: 'Género', clave: 'genero' },
    { etiqueta: 'Nacionalidad', clave: 'nacionalidad' }
  ];


  datos: Normal[] = [];

  botonesConfig = {
    registrar: true,
    ver: true,
    actualizar: true,
    eliminar: true,
    imprimir: true,
    exportarPDF: true,
    exportarExcel: true
  };

  constructor(private normalService: NormalService) { }

  ngOnInit(): void {
    this.normalService.listarInactivo().subscribe({
      next: (respuesta: Normal[]) => {
        console.log(respuesta)
        this.datos = respuesta;
      },
      error: (error) => {
        console.error('Error al listar usuarios:', error);
      }
    });
  }

  obtenerValor(dato: any, clave: string): any {
    return clave.split('.').reduce((obj, prop) => obj?.[prop], dato);
  }
}
