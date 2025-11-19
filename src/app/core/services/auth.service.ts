import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(payload: { email: string; password: string }) {
    return of({ token: 'mock-login-token', role: 'user' }).pipe(delay(500));
  }

  signup(payload: { name: string; email: string; password: string; role: string }) {
    return of({ token: 'mock-signup-token', role: payload.role }).pipe(delay(500));
  }

  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}