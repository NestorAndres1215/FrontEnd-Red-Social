import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../interceptors/helper';
import { Observable } from 'rxjs';
import { Historial } from '../models/historial';
@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }



  registrar(historial: Historial): Observable<any> {
    return this.http.post(`${baserUrl}/registrar`, historial);
  }

  listar(username: string, estado: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('estado', estado);

    return this.http.get<any>(`${baserUrl}/listar`, { params });
  }
}
