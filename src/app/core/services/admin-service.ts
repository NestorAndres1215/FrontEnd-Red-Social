import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

   constructor(private http: HttpClient) { }

    listarAdminsActivosExcluyendo(username: string) {
    const params = new HttpParams().set('username', username);
    return this.http.get<any[]>(`${baserUrl}/admin/listar/usuario/activo`, { params });
  }
}

