import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  login(user: { email: string; password: string }) {
    return this.http.post<IUser>(`${API_URL}/login`, user, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  register(user: { username: string; email: string; tel: string; password: string }) {
    return this.http.post<IUser>(`${API_URL}/register`, user, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  getProfileInfo() {
    return this.http.get<IUser>(`${API_URL}/users/profile`, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  logout() {
    return this.http.post<IUser>(`${API_URL}/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user = null)
    );
  }

  updateProfile(user: { username: string; email: string; tel: string }) {
    return this.http.put<IUser>(`${API_URL}/users/profile`, user, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }
}
