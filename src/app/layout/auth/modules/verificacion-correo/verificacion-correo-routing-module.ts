import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuspendidoCorreoError } from '../../components/suspendido-correo-error/suspendido-correo-error';

const routes: Routes = [
    { path: '', component: SuspendidoCorreoError }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificacionCorreoRoutingModule { }
