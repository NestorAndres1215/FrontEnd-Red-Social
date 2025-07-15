import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeradorRoutingModule } from './moderador-routing-module';
import { HomeModerador } from '../../components/home-moderador/home-moderador';

import { PrincipalModerador } from '../../components/principal-moderador/principal-moderador';


@NgModule({
  declarations: [],
  imports: [HomeModerador,PrincipalModerador,
    CommonModule,
    ModeradorRoutingModule
  ]
})
export class ModeradorModule { }
