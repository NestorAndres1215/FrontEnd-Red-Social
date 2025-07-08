import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OlvidarContrasenaRoutingModule } from './olvidar-contrasena-routing-module';
import { OlvidarContrasena } from '../../components/olvidar-contrasena/olvidar-contrasena';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OlvidarContrasena,
    OlvidarContrasenaRoutingModule
  ]
})
export class OlvidarContrasenaModule { }
