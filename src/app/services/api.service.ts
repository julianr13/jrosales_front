import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formularios } from '../models/formularios';
import { Campos } from '../models/campos';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5041/api';  
 
  constructor(private http: HttpClient) { }

  getFormualarios(): Observable<Formularios[]> {
    return this.http.get<Formularios[]>(`${this.apiUrl}/Formularios`);
  }

  getCampos(idFormulario: number): Observable<Campos[]> {
    return this.http.get<Campos[]>(`${this.apiUrl}/Campos/Formulario/${idFormulario}`);
  }
}
