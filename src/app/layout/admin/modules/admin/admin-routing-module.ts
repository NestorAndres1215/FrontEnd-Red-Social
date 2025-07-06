import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdmin } from '../../components/principal-admin/principal-admin';

const routes: Routes = [
  { path: '', component: PrincipalAdmin }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
