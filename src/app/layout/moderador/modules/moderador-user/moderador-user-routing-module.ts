import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeradorUser } from '../../components/moderador-user/moderador-user';

const routes: Routes = [
   { path: '', component: ModeradorUser },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeradorUserRoutingModule { }
