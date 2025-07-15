import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalModerador } from '../../components/principal-moderador/principal-moderador';

const routes: Routes = [
   { path: '', component: PrincipalModerador },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeradorRoutingModule { }
