import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';
import { Normal } from '../models/normal';
@Injectable({
  providedIn: 'root'
})
export class NormalService {

  constructor(private http: HttpClient) { }

  listarActivados(): Observable<any> {
    return this.http.get<any>(`${baserUrl}/normal/listar/activo`);
  }

  listarInactivo(): Observable<any> {
    return this.http.get<any>(`${baserUrl}/normal/listar/inactivo`);
  }

  listarSuspendido(): Observable<any> {
    return this.http.get<any>(`${baserUrl}/normal/listar/suspendido`);
  }

  listarBloqueado(): Observable<any> {
    return this.http.get<any>(`${baserUrl}/normal/listar/bloqueado`);
  }

  listarInhabilito(): Observable<any> {
    return this.http.get<any>(`${baserUrl}/normal/listar/inhabilito`);
  }

  registrar(normal: Normal): Observable<any> {
    return this.http.post<any>(`${baserUrl}/normal/guardar-normal`, normal);  // La URL debe ser cerrada adecuadamente
  }

  listarPorUsername(username: string): Observable<Normal[]> {
    return this.http.get<Normal[]>(`${baserUrl}/normal/listar/${username}`);
  }


}
