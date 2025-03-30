import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://67e8565920e3af747c4108d1.mockapi.io/api/v1/users'; // URL de MockAPI
  private authTokenKey = 'auth_token';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  // 🟢 Iniciar sesión: Busca el usuario en la API y guarda el token
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}`, // Endpoint correcto
      { email, password }, 
      { responseType: 'json' } // Asegura que la respuesta sea JSON
    ).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }
      })
    );
  }

  // 🟢 Registrar usuario en MockAPI
  register(email: string, password: string): Observable<any> {
    const newUser = { email, password, token: this.generateMockToken() };
    return this.http.post<any>(this.apiUrl, newUser);
  }

  // 🔴 Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  // 🟢 Comprobar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.hasToken();
  }

  // 🟢 Obtener token guardado
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  // 🟢 Guardar token en localStorage
  private saveToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  // 🟢 Verificar si hay token en localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  // 🔹 Generar token ficticio para registro
  private generateMockToken(): string {
    return Math.random().toString(36).substr(2);
  }
}

