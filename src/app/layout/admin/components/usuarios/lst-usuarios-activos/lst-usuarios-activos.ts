import { Component } from '@angular/core';
import { Table } from "../../../../../shared/components/table/table";


@Component({
  selector: 'app-lst-usuarios-activos',
  imports: [Table],
  templateUrl: './lst-usuarios-activos.html',
  styleUrl: './lst-usuarios-activos.css'
})
export class LstUsuariosActivos {

  iconoUsuarios: string = 'fas fa-users';
  tituloUsuarios: string = 'Mantenimiento de Usuarios';
  columnas: string[] = ['Nombre', 'Apellido', 'Correo', 'Telefono', 'Edad'];
datos = [
  { Nombre: 'Juan', Apellido: 'Pérez', Correo: 'juan.perez@example.com', Telefono: '987654321', Edad: 28 },
  { Nombre: 'María', Apellido: 'Gómez', Correo: 'maria.gomez@example.com', Telefono: '912345678', Edad: 32 },
  { Nombre: 'Luis', Apellido: 'Ramírez', Correo: 'luis.ramirez@example.com', Telefono: '976543210', Edad: 25 },
  { Nombre: 'Ana', Apellido: 'Torres', Correo: 'ana.torres@example.com', Telefono: '998877665', Edad: 29 },
  { Nombre: 'Carlos', Apellido: 'Fernández', Correo: 'carlos.fernandez@example.com', Telefono: '955667788', Edad: 34 },
  { Nombre: 'Sofía', Apellido: 'Castro', Correo: 'sofia.castro@example.com', Telefono: '944332211', Edad: 27 },
  { Nombre: 'Diego', Apellido: 'Vega', Correo: 'diego.vega@example.com', Telefono: '933221144', Edad: 31 },
  { Nombre: 'Lucía', Apellido: 'Navarro', Correo: 'lucia.navarro@example.com', Telefono: '922334455', Edad: 30 },
  { Nombre: 'Pedro', Apellido: 'Ortega', Correo: 'pedro.ortega@example.com', Telefono: '911223344', Edad: 26 },
  { Nombre: 'Valeria', Apellido: 'Ruiz', Correo: 'valeria.ruiz@example.com', Telefono: '988776655', Edad: 33 }
];

  botonesConfig = {
    registrar: true,
    ver: true,
    actualizar: true,
    eliminar: true,
    imprimir: true,
    exportarPDF: true,
    exportarExcel: true
  };

 registrar() {
    console.log('Registrar Marca');
  }

  ver(fila: any) {
    console.log('Ver Marca', fila);
  }

  actualizar(fila: any) {
    console.log('Actualizar Marca', fila);
  }

  eliminar(id: number) {
    console.log('Eliminar Marca ID:', id);
  }

  imprimir(fila: any) {
    console.log('Imprimir Marca', fila);
  }
}
