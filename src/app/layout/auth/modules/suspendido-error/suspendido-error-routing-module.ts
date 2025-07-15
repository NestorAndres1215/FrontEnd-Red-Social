import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuspendidoError } from '../../components/suspendido-error/suspendido-error';

const routes: Routes = [
    { path: '', component: SuspendidoError }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuspendidoErrorRoutingModule { }
