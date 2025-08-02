import { Component } from '@angular/core';
import { Table } from "../../../../../../shared/components/table/table";
import { NormalService } from '../../../../../../core/services/normal-service';
import { Normal } from '../../../../../../core/models/normal';

@Component({
  selector: 'app-lst-usuario-activo',
  imports: [Table],
  templateUrl: './lst-usuario-activo.html',
  styleUrl: './lst-usuario-activo.css'
})
export class LstUsuarioActivo {

  tituloUsuarios: string = 'Mantenimiento de Usuarios Activos';
  iconoUsuarios: string = 'fas fa-user-check';
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
    this.normalService.listarActivados().subscribe({
      next: (respuesta: Normal[]) => {
        console.log(respuesta)
        this.datos = respuesta;
      },
      error: (error) => {
        console.error('Error al listar usuarios:', error);
      }
    });
  }

  // Función para acceder a campos anidados usando la clave como 'usuario.username'
  obtenerValor(dato: any, clave: string): any {
    return clave.split('.').reduce((obj, prop) => obj?.[prop], dato);
  }
}
