import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MensajeService } from '../../../../../core/services/mensaje-service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edit-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-usuario.html',
  styleUrl: './edit-usuario.css'
})
export class EditUsuario implements OnInit {

  public formulario!: UntypedFormGroup;
  dataSource!: MatTableDataSource<any>;
  maxDate!: string;
  minDate!: string;
  lista: any;
  constructor(
    private dialogRef: MatDialogRef<EditUsuario>,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
    private mensaje: MensajeService,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {

  }
  ngOnInit(): void {
    this.lista = this.data.fila
    console.log(this.lista)
  }

  cerrar() {
    this.dialogRef.close();
  }


  initForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]], // ✅ Validación de email
      telefono: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')  // ✅ Solo números
      ]],
      fechaNacimiento: ['', Validators.required],
    });

  }
  operar() {
    throw new Error('Method not implemented.');
  }

}
