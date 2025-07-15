import { Component } from '@angular/core';
import { NavbarModerador } from "../../../../shared/components/navbar/navbar-moderador/navbar-moderador";

@Component({
  selector: 'app-home-moderador',
  standalone: true,
  imports: [NavbarModerador],
  templateUrl: './home-moderador.html',
  styleUrls: ['./home-moderador.css']
})
export class HomeModerador {

}
