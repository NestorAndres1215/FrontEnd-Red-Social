import { RouterModule, Routes } from "@angular/router";
import { Login } from "../../components/login/login";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: Login },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
