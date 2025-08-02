import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-table',
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {

  @Input() icono: string = '';
  @Input() titulo: string = '';
@Input() columnas: { etiqueta: string; clave: string }[] = [];

  @Input() onRegistrar!: () => void;
  @Input() botonesConfig: any = {};
  @Input() datos: any[] = [];
  hasActionButtons(): boolean {
    return this.botonesConfig.actualizar ||
      this.botonesConfig.eliminar ||
      this.botonesConfig.imprimir ||
      this.botonesConfig.ver;
  }
  paginaActual: number = 1;  // Página actual
  itemsPorPagina: number = 10; // Cantidad de elementos por página

  @Input() onVer!: (fila: any) => void;
  @Input() onActualizar!: (fila: any) => void;
  @Input() onEliminar!: (fila: any) => void;
  @Input() onImprimir!: (fila: any) => void;
  @Input() onExportarPDF!: () => void;
  @Input() onExportarExcel!: () => void;

  obtenerValor(obj: any, clave: string): any {
  return clave.split('.').reduce((valor, parte) => valor?.[parte], obj);
}

  getAnimationDelay(): number {
    return Math.floor(Math.random() * 500);
  }
  getAnimationDuration(): number {
    return Math.floor(Math.random() * 1000) + 500;
  }

  exportarPDF() {
  }
}
