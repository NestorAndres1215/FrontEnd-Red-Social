import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { LstUsuariosActivos } from '../../components/usuarios/lst-usuarios-activos/lst-usuarios-activos';
import { Table } from '../../../../shared/components/table/table';
import { RegUsuario } from '../../components/usuarios/reg-usuario/reg-usuario';


@NgModule({
  declarations: [],
  imports: [
    Table,
    CommonModule,
    RegUsuario,
    LstUsuariosActivos,
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
