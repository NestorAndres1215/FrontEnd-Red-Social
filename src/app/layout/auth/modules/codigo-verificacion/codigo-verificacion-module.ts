import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodigoVerificacionRoutingModule } from './codigo-verificacion-routing-module';
import { CodigoVerificacion } from '../../components/codigo-verificacion/codigo-verificacion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CodigoVerificacion,
    CodigoVerificacionRoutingModule
  ]
})
export class CodigoVerificacionModule { }
