import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstUsuariosActivos } from '../../components/usuarios/lst-usuarios-activos/lst-usuarios-activos';
import { LstAdmin } from '../../components/admin/lst-admin/lst-admin';

const routes: Routes = [
  { path: '', component: LstUsuariosActivos },
  { path: 'administrador', component: LstAdmin }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
