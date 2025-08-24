import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { MensajeService } from '../../../../core/services/mensaje-service';
import { Normal } from '../../../../core/models/normal';
import { NormalService } from '../../../../core/services/normal-service';

@Component({
  selector: 'app-registro-auth',
  imports: [FormsModule, ReactiveFormsModule, MatExpansionModule, RouterModule, MatToolbarModule, MatDialogModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule],

  templateUrl: './registro-auth.html',
  styleUrl: './registro-auth.css'
})
export class RegistroAuth implements OnInit {

  constructor(
    private router: Router,
    private mensaje: MensajeService,
    private normalService: NormalService,
    private formBuilder: UntypedFormBuilder,
  ) { }
  ngOnInit(): void {
    this.validarFecha()
    this.initForm()
  }

  public formulario!: UntypedFormGroup;
  maxDate: string | undefined;
  minDate: string | undefined;
  showPassword = false;
  edad!: number;
nacionalidades: string[] = [
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'México',
    'Perú',
    'Uruguay',
    'Paraguay',
    'Bolivia',
    'Ecuador',
    'Venezuela',
    'Costa Rica',
    'Panamá',
    'Guatemala',
    'Honduras',
    'El Salvador',
    'Nicaragua',
    'Cuba',
    'República Dominicana',
    'Puerto Rico',
    'Belice',
    'México',
    'Guyana',
    'Surinam',
    'Francia (Guayana)',
    'Estados Unidos',
    'Canadá',
    'España'
];

  generos: { valor: string, texto: string }[] = [
    { valor: 'masculino', texto: 'Masculino' },
    { valor: 'femenino', texto: 'Femenino' },
    { valor: 'otro', texto: 'Otro' },
    { valor: 'no_especificar', texto: 'Prefiero no especificar' }
  ];

  selectedNacionalidad: string = '';
  async validarFecha() {
    const today = new Date();
    const minYear = today.getFullYear() - 120; // Máximo 120 años atrás
    this.minDate = `1980-01-01`; // Fecha mínima permitida
    this.maxDate = this.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 18)));
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes con dos dígitos
    const day = String(date.getDate()).padStart(2, '0'); // Día con dos dígitos
    return `${year}-${month}-${day}`;
  }

  initForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      username: [''],
      password: [''],
      email: [''],
      telefono: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')  // Solo números
      ]],
      fechaNacimiento: [''],
      nacionalidad: [''],  // 👈 este campo es necesario
      genero: ['']         // 👈 también si usas formControlName en género
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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  operar() {

    const fechaNacimiento = this.formulario.get('fechaNacimiento')?.value;
    if (fechaNacimiento) {
      this.edad = this.calcularEdad(fechaNacimiento);

    }
    if (this.formulario.valid) {
      const objNormal: Normal = {
        codigoUsuario: '',
        codigoNormal: '',
        nombreNormal: this.formulario.get('nombre')?.value,
        apellidoNormal: this.formulario.get('apellido')?.value,
        correoNormal: this.formulario.get('email')?.value,
        edadNormal: this.edad,
        telefonoNormal: this.formulario.get('telefono')?.value,
        fechaNacimientoNormal: this.formulario.get('fechaNacimiento')?.value,
        generoNormal: this.formulario.get('genero')?.value,
        nacionalidadNormal: this.formulario.get('nacionalidad')?.value,
        usernameNormal: this.formulario.get('username')?.value,
        passwordNormal: this.formulario.get('password')?.value
      };

      console.log(objNormal)
      this.normalService.registrar(objNormal).subscribe({
        next: (respuesta) => {

          this.mensaje.MostrarMensajeExito("Se Registro Correctamente los datos");
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al registrar', error);

        }
      });

    } else {
      this.mensaje.MostrarMensaje("FORMULARIO VACIO");
    }
  }
}
