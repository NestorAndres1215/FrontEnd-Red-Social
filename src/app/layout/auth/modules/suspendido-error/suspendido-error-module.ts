import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspendidoErrorRoutingModule } from './suspendido-error-routing-module';
import { SuspendidoError } from '../../components/suspendido-error/suspendido-error';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,SuspendidoError,
    SuspendidoErrorRoutingModule
  ]
})
export class SuspendidoErrorModule { }
