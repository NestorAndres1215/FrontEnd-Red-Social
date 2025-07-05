import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro-auth',
  imports: [MatExpansionModule, RouterModule, MatToolbarModule, MatDialogModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule],

  templateUrl: './registro-auth.html',
  styleUrl: './registro-auth.css'
})
export class RegistroAuth {
  showPassword = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
