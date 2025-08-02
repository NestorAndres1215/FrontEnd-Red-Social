import { Component } from '@angular/core';
import { NormalService } from '../../../../../../core/services/normal-service';
import { Normal } from '../../../../../../core/models/normal';
import { Table } from "../../../../../../shared/components/table/table";

@Component({
  selector: 'app-lst-usuario-bloqueados',
  imports: [Table],
  templateUrl: './lst-usuario-bloqueados.html',
  styleUrl: './lst-usuario-bloqueados.css'
})
export class LstUsuarioBloqueados {
  tituloUsuarios: string = 'Mantenimiento de Usuarios Bloqueados';
  iconoUsuarios: string = 'fas fa-user-lock';
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
    this.normalService.listarBloqueado().subscribe({
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
