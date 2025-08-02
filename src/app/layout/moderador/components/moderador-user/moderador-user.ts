import { Component } from '@angular/core';
import { CardLst } from "../../../../shared/components/card/card-lst/card-lst";
import { NormalService } from '../../../../core/services/normal-service';
import { Normal } from '../../../../core/models/normal';
import { M } from "../../../../../../node_modules/@angular/material/form-field.d-C6p5uYjG";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-moderador-user',
  imports: [CommonModule, MatInputModule, MatInputModule, MatSelectModule, FormsModule, NgxPaginationModule],
  templateUrl: './moderador-user.html',
  styleUrl: './moderador-user.css'
})
export class ModeradorUser {
  paginaActual: number = 1;
  itemsPorPagina: number = 8; // Ajusta según el número de tarjetas por página (e.g., 12 para 3x4 en pantallas grandes)

  // Datos de ejemplo (ajusta según tu caso)
  titulo: string = 'Lista de Usuarios';
  icono: string = 'fas fa-users';
  filtro: string = '';
  usuarios: any[] = [
    { nombre: 'Juan', apellido: 'Pérez', imagen: 'img/perfil/juan.jpg' },
    { nombre: 'María', apellido: 'Gómez', imagen: 'img/perfil/maria.jpg' },
    { nombre: 'Carlos', apellido: 'Ramírez', imagen: 'img/perfil/carlos.jpg' },
    { nombre: 'Laura', apellido: 'López', imagen: 'img/perfil/laura.jpg' },
    { nombre: 'Ana', apellido: 'Martínez', imagen: 'img/perfil/ana.jpg' },
    { nombre: 'Pedro', apellido: 'Sánchez', imagen: 'img/perfil/pedro.jpg' },
    { nombre: 'Sofía', apellido: 'Torres', imagen: 'img/perfil/sofia.jpg' },
    { nombre: 'Miguel', apellido: 'Díaz', imagen: 'img/perfil/miguel.jpg' },
    { nombre: 'Lucía', apellido: 'Fernández', imagen: 'img/perfil/lucia.jpg' },
    { nombre: 'Diego', apellido: 'Ruiz', imagen: 'img/perfil/diego.jpg' },
    { nombre: 'Elena', apellido: 'Moreno', imagen: 'img/perfil/elena.jpg' },
    { nombre: 'Jorge', apellido: 'Herrera', imagen: 'img/perfil/jorge.jpg' },
    { nombre: 'Paula', apellido: 'Romero', imagen: 'img/perfil/paula.jpg' },
    { nombre: 'Andrés', apellido: 'Ibáñez', imagen: 'img/perfil/andres.jpg' },
    { nombre: 'Verónica', apellido: 'Contreras', imagen: 'img/perfil/veronica.jpg' },
    { nombre: 'Raúl', apellido: 'Calderón', imagen: 'img/perfil/raul.jpg' },
    { nombre: 'Isabel', apellido: 'Rojas', imagen: 'img/perfil/isabel.jpg' },
    { nombre: 'David', apellido: 'Vargas', imagen: 'img/perfil/david.jpg' },
    { nombre: 'Cecilia', apellido: 'Delgado', imagen: 'img/perfil/cecilia.jpg' },
    { nombre: 'Guillermo', apellido: 'Márquez', imagen: 'img/perfil/guillermo.jpg' },
  ];
  usuariosFiltrados: any[] = this.usuarios;

  // Método para filtrar usuarios
  filtrarUsuarios() {
    this.paginaActual = 1; // Resetear a la primera página al filtrar
    if (this.filtro) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        `${usuario.nombre} ${usuario.apellido}`
          .toLowerCase()
          .includes(this.filtro.toLowerCase())
      );
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }

  // Método para limpiar el filtro
  limpiarFiltro() {
    this.filtro = '';
    this.filtrarUsuarios();
  }

  // Método para mostrar la imagen
  mostrarImagen(usuario: any): string | null {
    return usuario.imagen || null; // Ajusta según tu lógica
  }

  // Método para manejar cambio de página
  onPageChange(page: number) {
    this.paginaActual = page;
    // Opcional: Lógica adicional al cambiar de página (e.g., scroll al inicio)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
