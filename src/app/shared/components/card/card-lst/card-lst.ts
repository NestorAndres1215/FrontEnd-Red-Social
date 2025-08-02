import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-card-lst',
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './card-lst.html',
  styleUrl: './card-lst.css'
})
export class CardLst {

   @Input() icono: string = '';
  @Input() titulo: string = '';
  @Input() columnas: { etiqueta: string; clave: string }[] = [];
  @Input() botonesConfig: any = {};
  @Input() datos: any[] = [];
  @Input() onBuscar!: () => void;
  @Input() onVer!: (fila: any) => void;
  @Input() onActualizar!: (fila: any) => void;
  @Input() onEliminar!: (fila: any) => void;
  @Input() onImprimir!: (fila: any) => void;
  @Input() onExportarPDF!: () => void;
  @Input() onExportarExcel!: () => void;

  paginaActual: number = 1;
  itemsPorPagina: number = 10;

  hasActionButtons(): boolean {
    return this.botonesConfig.ver ||
           this.botonesConfig.actualizar ||
           this.botonesConfig.eliminar ||
           this.botonesConfig.imprimir;
  }

  obtenerValor(obj: any, clave: string): any {
    return clave.split('.').reduce((valor, parte) => valor?.[parte], obj);
  }

  getAnimationDelay(): number {
    return Math.floor(Math.random() * 500);
  }

  getAnimationDuration(): number {
    return Math.floor(Math.random() * 1000) + 500;
  }

  exportarPDF() {}
}
