import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';

@Injectable({
  providedIn: 'root'
})
export class SuspensionesService {

 constructor(private http: HttpClient) { }

 listarPorUsuario(codigo: string): Observable<any[]> {
    return this.http.get<any[]>(`${baserUrl}/revision/suspension/listar/supensiones/usuario/${codigo}`);
  }

}
