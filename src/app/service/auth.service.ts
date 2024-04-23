import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/auth";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {ISignin} from "../interfaces/interfaces-auth/i-signin";
import {Observable} from "rxjs";
import {ISignInResponse} from "../interfaces/interfaces-auth/i-signin-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  baseUrl = environment.apiBaseUrl
  keyToken: string = 'token'

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: ISignin): Observable<ISignInResponse> {
    const headers = {
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify(user);
    return this.http.post<ISignInResponse>(`${this.baseUrl}/api/auth0/v1/login`, body, {headers});
  }

  setAuth(token: string) {
    localStorage.setItem(this.keyToken, token);
    this.isLoggedIn = true;
  }

  // isAuth(): boolean {
  //   if (localStorage.getItem(this.keyToken)) {
  //     this.isLoggedIn = true;
  //     return this.isLoggedIn;
  //   }
  //   return false;
  // }

  getToken(): string {
    return localStorage.getItem(this.keyToken) || '';
  }

  logout() {
    localStorage.removeItem(this.keyToken);
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login'])
  }

  isTokenValid(token: string): boolean {
    return token.length > 300;
  }

  isAuth(): boolean {
    const token = localStorage.getItem(this.keyToken);
    if (token && this.isTokenValid(token)) {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    return false;
  }

}
