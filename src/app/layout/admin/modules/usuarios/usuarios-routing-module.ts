import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstUsuariosActivos } from '../../components/usuarios/lst-usuarios-activos/lst-usuarios-activos';

const routes: Routes = [
    { path: '', component: LstUsuariosActivos }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
