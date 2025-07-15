import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstUsuarioActivo } from '../../components/usuarios/usuarios-activos/lst-usuario-activo/lst-usuario-activo';
import { LstUsuarioSuspendidos } from '../../components/usuarios/usuarios-suspendidos/lst-usuario-suspendidos/lst-usuario-suspendidos';
import { LstUsuarioBloqueados } from '../../components/usuarios/usuarios-bloqueados/lst-usuario-bloqueados/lst-usuario-bloqueados';

const routes: Routes = [

  { path: 'usuarios-activados', component: LstUsuarioActivo },
  { path: 'usuarios-suspendidos', component: LstUsuarioSuspendidos },
  { path: 'usuarios-bloqueados', component: LstUsuarioBloqueados },
]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
