import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdmin } from '../../components/principal-admin/principal-admin';
import { LstUsuariosActivos } from '../../components/usuarios/lst-usuarios-activos/lst-usuarios-activos';

const routes: Routes = [
  { path: '', component: PrincipalAdmin },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
