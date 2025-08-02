import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';
import { Verificacion, VerificacionCodigo } from '../models/verificacion';
@Injectable({
  providedIn: 'root'
})
export class VerificacionService {

  constructor(private http: HttpClient) { }

  enviarCodigoVerificacion(verificacion: Verificacion): Observable<any> {
    return this.http.post<any>(`${baserUrl}/codigo-verificacion/enviar-codigo`, verificacion);
  }

  verificarCodigo(verificacion: VerificacionCodigo): Observable<any> {
    return this.http.post(`${baserUrl}/codigo-verificacion/verificar-codigo`, verificacion);
  }


}
