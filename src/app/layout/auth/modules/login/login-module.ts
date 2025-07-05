import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing-module";
import { Login } from "../../components/login/login"; // Esto está bien si es el componente

@NgModule({
    declarations: [
        // No declarar componentes standalone aquí
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        Login // Importar el componente standalone aquí
    ]
})
export class LoginModule { }
