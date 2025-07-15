import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-navbar-moderador',
  imports: [MatMenuTrigger, RouterModule, MatToolbarModule, MatDialogModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule],


  templateUrl: './navbar-moderador.html',
  styleUrl: './navbar-moderador.css'
})
export class NavbarModerador {

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
  tieneSubMenu(menuItem: any): boolean {
    console.log("hola" + menuItem)
    return (
      this.menu2FiltradoPorCategoria[menuItem.categoria] &&
      this.menu2FiltradoPorCategoria[menuItem.categoria].length > 0
    );
  }
  handleClick(menuItem: any): void {
    console.log("que cosa" + menuItem)
    if (this.tieneSubMenu(menuItem)) {
      console.log("a" + menuItem.mostrarSubMenu)
      menuItem.mostrarSubMenu = !menuItem.mostrarSubMenu;
    } else {
      this.irARuta(menuItem.ruta);
    }
  }
  irARuta(ruta: string): void {
    if (!ruta || ruta.trim() === '' || ruta === 'null') {
      console.warn('Ruta inválida:', ruta);
      return;
    }
    this.router.navigateByUrl('/' + ruta);
  }
  async listarRolMenu() {
    this.menu.listarMenuCodigo("0002").subscribe(data => {
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
            item.rol && (item.rol.codigo === '0002')
        );
        console.log(this.datosmenuPrimero);
      }
    );
  }
  //* Filtrar el menú por categoría y asignar a menu2FiltradoPorCategoria
  menu2FiltradoPorCategoria: { [categoria: string]: any[] } = {};
  toggleSubMenu(menuItem: any): void {
    console.log("xd"+menuItem)
    if (!menuItem || !menuItem.categoria) {
      console.warn('No se puede cargar submenú: categoría no definida');
      return;
    }

    menuItem.mostrarSubMenu = !menuItem.mostrarSubMenu;

    if (menuItem.mostrarSubMenu) {
      this.menu2FiltradoPorCategoria[menuItem.categoria] = this.menu2.filter(
        (i: { categoria: any }) => i.categoria === menuItem.categoria
      );

      if (this.menu2FiltradoPorCategoria[menuItem.categoria].length === 0) {
        console.warn('Submenú vacío. Redirigiendo a /administrador');
        this.router.navigate(['/moderador']);
      }
    } else {
      this.menu2FiltradoPorCategoria[menuItem.categoria] = [];
    }
  }


  async listarMenuSegundo(categoria: any) {
    this.menu.listarSegundoNivel(categoria).subscribe(
      data => {
        this.menu2 = data
        console.log(this.menu2)
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
