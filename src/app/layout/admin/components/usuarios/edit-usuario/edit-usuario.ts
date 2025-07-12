import { ChangeDetectorRef, Component, Inject } from '@angular/core';
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
export class EditUsuario {
operar() {
throw new Error('Method not implemented.');
}
  public formulario!: UntypedFormGroup;
  dataSource!: MatTableDataSource<any>;
  maxDate!: string;
  minDate!: string;
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


}
