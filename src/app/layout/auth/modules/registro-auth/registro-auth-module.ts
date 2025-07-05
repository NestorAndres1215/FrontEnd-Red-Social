import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroAuthRoutingModule } from './registro-auth-routing-module';
import { RegistroAuth } from '../../components/registro-auth/registro-auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegistroAuth,
    RegistroAuthRoutingModule
  ]
})
export class RegistroAuthModule { }
