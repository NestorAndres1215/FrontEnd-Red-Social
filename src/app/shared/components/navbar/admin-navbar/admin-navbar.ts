import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../../core/services/login-service';
import { MenuService } from '../../../../core/services/menu-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-navbar',
  imports: [MatMenuTrigger, RouterModule, MatToolbarModule, MatDialogModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule],


  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.css'
})
export class AdminNavbar {


  isLoggedIn = false;
  user: any = null;
  contenido: any;
  isRouteActive: boolean = true;
  rolMenu: any
  status = false;
  datosmenuPrimero: any
  menuxd: any
  menu2: any



  constructor(
    public login: LoginService,
    private dialog: MatDialog,
    private router: Router,
    private menu: MenuService) { }




  ngOnInit(): void {
    this.listarRolMenu()


    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )

  }

  async listarRolMenu() {
    this.menu.listarMenuCodigo("0001").subscribe(data => {
      this.rolMenu = data
      console.log(this.rolMenu)
      this.listarMenuPrimero();
      this.listarMenuSegundo('');
    })
  }

  async listarMenuPrimero() {
    this.menu.listarPrimerNivel().subscribe(
      data => {
        this.menuxd = data
        console.log(this.menuxd)
        //this.datosmenuPrimero = this.menuxd.filter((item: { tipo: string; }) => item.tipo === 'T'); 
        this.datosmenuPrimero = this.menuxd.filter(
          (item: { rol: { codigo: string } | null }) =>
            item.rol && (item.rol.codigo === 'ROL' || item.rol.codigo === '0001')
        );
        console.log(this.datosmenuPrimero);
      }
    );
  }
  //* Filtrar el menú por categoría y asignar a menu2FiltradoPorCategoria
  menu2FiltradoPorCategoria: { [categoria: string]: any[] } = {};
  toggleSubMenu(menuItem: any): void {
    menuItem.mostrarSubMenu = !menuItem.mostrarSubMenu;
    //* Filtrar el menú por categoría y asignar a menu2FiltradoPorCategoria
    if (menuItem.mostrarSubMenu) {
      console.log(menuItem.mostrarSubMenu)
      //* Filtrar el menú por categoría y asignar a menu2FiltradoPorCategoria
      this.menu2FiltradoPorCategoria[menuItem.categoria] = this.menu2.filter((i: { categoria: any; }) => i.categoria === menuItem.categoria);
      console.log(this.menu2FiltradoPorCategoria[menuItem.categoria])
      if (this.menu2FiltradoPorCategoria[menuItem.categoria].length === 0) {
        this.router.navigate(['/administrador']);
      }
    } else {
      this.menu2FiltradoPorCategoria[menuItem.categoria] = [];
    }
  }


  async listarMenuSegundo(categoria: any) {
    this.menu.listarSegundoNivel(categoria).subscribe(
      data => {
        this.menu2 = data
      }
    );
  }

  public logout() {
    this.login.logout();
    window.location.href = '/login';
  }


  addToggle() {
    this.status = !this.status;
  }

  @ViewChild(MatMenuTrigger) mainMenuTrigger!: MatMenuTrigger;
  closeMainMenu() {
    this.mainMenuTrigger.closeMenu();
  }



}
