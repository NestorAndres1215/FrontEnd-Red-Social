import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MensajeService } from '../../../../../core/services/mensaje-service';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from '../../../../../core/models/admin';

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
  nombre!: string;
  apellido!: string;
  correo!: string;
  telefono!: string;
  fecha!: string;
  contra!: string;
  codigoNormal!: string;
  codigoUsuario!: string;
  username!: string;
  edad!: number
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
    console.log(this.data.fila)
    this.lista = this.data.fila
    console.log(this.lista.Nombre)
    this.listarEdiciones()
  }
  listarEdiciones() {
    this.nombre = this.lista.Nombre
    this.apellido = this.lista.Apellido
    this.telefono = this.lista.Telefono;
    this.correo = this.lista.Correo;
    this.fecha = this.lista.FechaNacimiento;
    this.contra = this.lista.Contra;
    this.username = this.lista.Usuario;
    this.codigoNormal = this.lista.Codigo;
    this.codigoUsuario = this.lista.CodUsuario;



    console.log(this.nombre)
    //   this.validarFecha()
    this.initForm()


  }
  cerrar() {
    this.dialogRef.close();
  }


  initForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      apellido: [this.apellido, Validators.required],
      correo: [this.correo, [Validators.required, Validators.email]], // ✅ Validación de email
      telefono: [this.telefono, [
        Validators.required,
        Validators.pattern('^[0-9]*$')  // ✅ Solo números
      ]],
      fechaNacimiento: [this.fecha, Validators.required],
    });

  }

  calcularEdad(fechaNacimientoString: string): number {
    const hoy = new Date();
    const fechaNacimiento = new Date(fechaNacimientoString);

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  }
  async validarFecha() {
    const today = new Date();
    const minYear = today.getFullYear() - 120; // Máximo 120 años atrás
    this.minDate = `1980-01-01`; // Fecha mínima permitida
    this.maxDate = this.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 20)));
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
    const day = String(date.getDate()).padStart(2, '0'); // Día con dos dígitos
    return `${year}-${month}-${day}`;
  }
  operar() {


    console.log(this.formulario.value);

    const fechaNacimiento = this.formulario.get('fechaNacimiento')?.value;
    if (fechaNacimiento) {
      const fecha = new Date(fechaNacimiento);
      const anio = fecha.getFullYear();

      if (anio < 1980) {
        this.mensaje.MostrarMensajeError('Ese año de nacimiento no es valido');
        return;
      }
    }
    if (fechaNacimiento) {
      this.edad = this.calcularEdad(fechaNacimiento);
    }
    const objAdmin: Admin = {
      codigoUsuario: this.codigoUsuario,
      codigoAdmin: this.codigoNormal,
      nombre: this.formulario.get('nombre')?.value,
      apellido: this.formulario.get('apellido')?.value,
      correo: this.formulario.get('correo')?.value,
      telefono: this.formulario.get('telefono')?.value,
      edad: this.edad,
      fechaNacimiento: this.formulario.get('fechaNacimiento')?.value,
      username: this.username,
      password: this.contra,
      perfil: ''
    }
    console.log(objAdmin)
  }

}
