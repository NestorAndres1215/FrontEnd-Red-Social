import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAuth } from '../../components/registro-auth/registro-auth';

const routes: Routes = [
  { path: '', component: RegistroAuth }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroAuthRoutingModule { }
