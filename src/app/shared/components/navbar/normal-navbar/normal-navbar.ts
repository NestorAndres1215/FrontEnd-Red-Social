import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeRoutingModule } from "../../../../layout/auth/modules/home/home-routing-module";
import { RouterModule } from '@angular/router';
import { LoginService } from '../../../../core/services/login-service';
import { NormalService } from '../../../../core/services/normal-service';
import { Normal } from '../../../../core/models/normal';

@Component({
  selector: 'app-normal-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './normal-navbar.html',
  styleUrl: './normal-navbar.css'
})
export class NormalNavbar implements OnInit {

  constructor(
    private login: LoginService, private normal: NormalService
  ) { }

  ngOnInit(): void {
    this.user = this.login.getUser();
     this.listarUsuarios(this.user.username);
  }

  isNavActive: boolean = false;
  isLoggedIn = true;
  user: any = null;
  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }



  public logout() {
    this.login.logout();
    window.location.href = '/login';
  }
normales: Normal[] = [];
  listarUsuarios(username: string): void {
    this.normal.listarPorUsername(username).subscribe({
      next: (respuesta: Normal[]) => {
        this.normales = respuesta;
        console.log('Datos obtenidos:', this.normales);
        
      },
      error: (error) => {
        console.error('Error al listar usuarios:', error);
      }
    });
  }
}
