import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloqueoErrorRoutingModule } from './bloqueo-error-routing-module';
import { BloqueoError } from '../../components/bloqueo-error/bloqueo-error';


@NgModule({
  declarations: [

   
  ],
  imports: [
    CommonModule,
    BloqueoError,
    BloqueoErrorRoutingModule
  ]
})
export class BloqueoErrorModule { }
