import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OlvidarContrasena } from '../../components/olvidar-contrasena/olvidar-contrasena';

const routes: Routes = [
  {
      path:'',component:OlvidarContrasena
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OlvidarContrasenaRoutingModule { }
