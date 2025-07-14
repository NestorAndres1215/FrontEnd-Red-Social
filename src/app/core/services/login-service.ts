import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import baserUrl from '../interceptors/helper';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public loginStatusSubjec = new Subject<boolean>();
  constructor(private http: HttpClient) { }


  // Método para generar el token
  public generateToken(loginData: any) {
    return this.http.post(`${baserUrl}/auth/generate-token`, loginData);
  }

  public getCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get(`${baserUrl}/auth/actual-usuario`, { headers });
    } else {
      // Si no tienes el token, lanza un error o maneja de otra manera
      return this.http.get(`${baserUrl}/auth/actual-usuario`);  // O puedes manejarlo de otra forma
    }
  }


  // Método para guardar el token en localStorage
  public loginUser(token: any) {

    localStorage.setItem('token', token);
    return true;
  }

  // Método para verificar si el usuario está logueado
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // Método para hacer logout
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // Método para obtener el token desde localStorage
  public getToken() {

    // localStorage.removeItem('token');

    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');
  }



  // Método para guardar al usuario en localStorage
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Método para obtener al usuario de localStorage
  public getUser() {
    let userStr = localStorage.getItem('user');
    console.log(userStr)
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // Método para obtener el rol del usuario
  public getUserRole() {
    let user = this.getUser();
    return user?.authorities?.[0]?.authority;
  }


  bloquearUsuario(username: string): Observable<any> {
    return this.http.delete(`${baserUrl}/auth/usuario/bloquear/${username}`);
  }
}