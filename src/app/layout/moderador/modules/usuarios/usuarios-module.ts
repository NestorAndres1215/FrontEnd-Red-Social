import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { LstUsuarioActivo } from '../../components/usuarios/usuarios-activos/lst-usuario-activo/lst-usuario-activo';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,LstUsuarioActivo,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
