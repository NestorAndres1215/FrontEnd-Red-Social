import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalNormal } from '../../components/principal-normal/principal-normal';

const routes: Routes = [
  { path: '', component: PrincipalNormal }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalRoutingModule { }
