import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {



  validarCorreo(correo: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }

  formatearFecha(fechaStr: string): string {
    if (!fechaStr) return '';

    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const [año, mes, dia] = fechaStr.split('-');
    return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${año}`;
  }

}
