import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  listarAdminsActivosExcluyendo(username: string) {
    const params = new HttpParams().set('username', username);
    return this.http.get<any[]>(`${baserUrl}/admin/listar/usuario/activo`, { params });
  }

  registrar(admin: Admin): Observable<any> {
    return this.http.post<any>(`${baserUrl}/admin/guardar-admin`, admin);
  }

  actualizar(admin: Admin): Observable<any> {
    return this.http.post<any>(`${baserUrl}/admin/actualizar-admin`, admin);
  }

  desactivarAdmin(codigo: string): Observable<any> {
    return this.http.delete(`${baserUrl}/admin/desactivar/${codigo}`);
  }

  activarAdmin(codigo: string): Observable<any> {
    return this.http.delete(`${baserUrl}/admin/usuario/activar/${codigo}`);
  }


  bloquearAdmin(codigo: string): Observable<any> {
    return this.http.delete(`${baserUrl}/admin/usuario/bloquear/${codigo}`);
  }
}

