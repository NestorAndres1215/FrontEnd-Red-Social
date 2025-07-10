import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-visor',
  imports: [CommonModule],
  templateUrl: './modal-visor.html',
  styleUrl: './modal-visor.css'
})
export class ModalVisor implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) { }

  titulo: string = "";
  @Input() columnas: string[] = [];
  @Input() datos: any;
  ngOnInit(): void {
    console.log('Datos recibidos en el modal:', this.data.titulo);
    this.titulo = this.data['titulo'];
    this.columnas = this.data['columnas'];

    this.datos = this.data['fila'];
    console.log('Datos de la fila:', this.datos);
    console.log(typeof this.datos )
  }

  }




