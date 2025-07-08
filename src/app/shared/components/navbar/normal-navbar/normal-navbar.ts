import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeRoutingModule } from "../../../../layout/auth/modules/home/home-routing-module";
import { RouterModule } from '@angular/router';
import { LoginService } from '../../../../core/services/login-service';

@Component({
  selector: 'app-normal-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './normal-navbar.html',
  styleUrl: './normal-navbar.css'
})
export class NormalNavbar {
  constructor(private login: LoginService) { }
  isNavActive: boolean = false;
  isLoggedIn = true;
  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }



  public logout() {
    this.login.logout();
    window.location.href = '/login';
  }
}
