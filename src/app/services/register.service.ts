import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://67e8565920e3af747c4108d1.mockapi.io/api/v1/users'; // URL de MockAPI

  constructor(private http:HttpClient) { }
  registerClient(nombre: string, email: string, telefono: string, direccion: string, password: string): Observable<any> {
    const body = { nombre, email, telefono, direccion, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
}
