import { Component, OnInit } from '@angular/core';
import { LstUsuariosActivos } from '../lst-usuarios-activos/lst-usuarios-activos';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MensajeService } from '../../../../../core/services/mensaje-service';
import { Admin } from '../../../../../core/models/admin';


@Component({
  selector: 'app-reg-usuario',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reg-usuario.html',
  styleUrl: './reg-usuario.css'
})
export class RegUsuario implements OnInit {
  public formulario!: UntypedFormGroup;
  edad!: number;
  maxDate!: string;
  minDate!: string;
   showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private dialogRe: MatDialogRef<LstUsuariosActivos>,
    private formBuilder: UntypedFormBuilder,
    private mensaje: MensajeService
  ) { }

  ngOnInit(): void {
    this.validarFecha()
    this.initForm(); // Llamamos al método que inicializa el formulario
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
      username: ['', Validators.required],
      password: ['', Validators.required]
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
      this.edad = this.calcularEdad(fechaNacimiento);
    }


    if (this.formulario.valid) {
      const objAdmin: Admin = {
        codigoUsuario: '',
        codigoAdmin: '',
        nombre: this.formulario.get('nombre')?.value,
        apellido: this.formulario.get('apellido')?.value,
        correo: this.formulario.get('correo')?.value,
        telefono: this.formulario.get('telefono')?.value,
        edad: this.edad,
        fechaNacimiento: this.formulario.get('fechaNacimiento')?.value,
        username: this.formulario.get('username')?.value,
        password: this.formulario.get('password')?.value,
      }
      console.log(objAdmin);
    } else {
      this.mensaje.MostrarMensaje("Formulario Vacio")

    }
  }

  cerrar() {
    this.dialogRe.close();
  }
}
