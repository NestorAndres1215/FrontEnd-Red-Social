import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodigoVerificacion } from '../../components/codigo-verificacion/codigo-verificacion';

const routes: Routes = [

    { path: '', component: CodigoVerificacion },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodigoVerificacionRoutingModule { }
