import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloqueoError } from '../../components/bloqueo-error/bloqueo-error';

const routes: Routes = [
    { path: '', component: BloqueoError },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloqueoErrorRoutingModule { }
