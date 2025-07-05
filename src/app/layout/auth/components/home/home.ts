import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatIconModule, MatListModule],
  templateUrl: './home.html',
  styleUrl: './home.css'

})
export class Home {

}
