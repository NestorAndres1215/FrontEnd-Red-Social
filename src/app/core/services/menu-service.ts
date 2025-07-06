import { Injectable } from '@angular/core';
import { LoginService } from './login-service';
import { HttpClient } from '@angular/common/http';
import baserUrl from '../interceptors/helper';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  listarPrimerNivel() {
    return this.http.get(`${baserUrl}/menu/listar/PrimerNivel`);
  }

  listarSegundoNivel(menu: any) {
    return this.http.get(`${baserUrl}/menu/listar/SegundoNivel`);
  }

  listarTercerNivel(menu: any) {
    return this.http.get(`${baserUrl}/menu/listar/TercerNivel`);
  }

  listarMenuCodigo(primerCodigo: string) {
    const token = this.loginService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };

    return this.http.get(`${baserUrl}/menu/listaRolesCodigo/${primerCodigo}`, { headers });
  }

}
