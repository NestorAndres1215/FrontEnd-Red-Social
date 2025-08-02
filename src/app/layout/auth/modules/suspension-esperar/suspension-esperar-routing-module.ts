import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuspencionPagEsperar } from '../../components/suspencion-pag-esperar/suspencion-pag-esperar';

const routes: Routes = [
    { path: '', component:  SuspencionPagEsperar }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuspensionEsperarRoutingModule { }
