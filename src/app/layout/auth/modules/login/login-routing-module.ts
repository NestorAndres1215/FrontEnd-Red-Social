import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { Login } from "../../components/login/login";

const routes: Routes = [
  { path: '', component: Login },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
