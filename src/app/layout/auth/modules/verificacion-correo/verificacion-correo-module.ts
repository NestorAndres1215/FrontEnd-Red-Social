import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificacionCorreoRoutingModule } from './verificacion-correo-routing-module';
import { SuspendidoCorreoError } from '../../components/suspendido-correo-error/suspendido-correo-error';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    SuspendidoCorreoError,
    VerificacionCorreoRoutingModule
  ]
})
export class VerificacionCorreoModule { }
