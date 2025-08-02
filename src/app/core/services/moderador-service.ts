import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../interceptors/helper';

@Injectable({
  providedIn: 'root'
})
export class ModeradorService {

  constructor(private http: HttpClient) { }


}
