import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeradorUserRoutingModule } from './moderador-user-routing-module';
import { ModeradorUser } from '../../components/moderador-user/moderador-user';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,ModeradorUser,
    ModeradorUserRoutingModule
  ]
})
export class ModeradorUserModule { }
