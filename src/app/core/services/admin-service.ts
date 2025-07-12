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
    console.log('Registrar Admin', admin);
    return this.http.post<any>(`${baserUrl}/admin/guardar-admin`, admin);  // La URL debe ser cerrada adecuadamente
  }

  actualizar(admin: Admin): Observable<any> {
    console.log('Registrar Admin', admin);
    return this.http.post<any>(`${baserUrl}/admin/actualizar-admin`, admin);  // La URL debe ser cerrada adecuadamente
  }
}

