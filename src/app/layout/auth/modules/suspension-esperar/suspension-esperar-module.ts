import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspensionEsperarRoutingModule } from './suspension-esperar-routing-module';
import { SuspencionPagEsperar } from '../../components/suspencion-pag-esperar/suspencion-pag-esperar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,SuspencionPagEsperar,
    SuspensionEsperarRoutingModule
  ]
})
export class SuspensionEsperarModule { }
