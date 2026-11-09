import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login-model';
import { TokenModel } from './token-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenKey: string = "auth-token"
  constructor(private router: Router, public http: HttpClient) {

  }

  login(LoginModel: LoginModel): void {
    this.http.post<TokenModel>("https://api.siposm.hu/login", LoginModel).subscribe({
      next: response => {
        console.log(response)
        this.saveToken(response.token)
      },
      error: error => {
        console.log(error)
      }
    })
  }
  saveToken(token: string) {
    localStorage.setItem("auth-token", token)
  }
  logout() { 
    this.removeToken()
  }
  removeToken(): void{
    localStorage.removeItem(this.tokenKey)
    this.router.navigateByUrl("login")
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem(this.tokenKey) !== null) return true
    else return false
  }
}
/*  ng class login-model {username: string = ""
    password: string= ""} 2.ng g s auth 3.postman (Echo Api) new request vegpont autenthez posttal, majd admin-pass paros bodyba majd autentikacional 
    kuldesre kapok egy tokent 4. pl skill torles vegpont beallit es ehhez amit akarok csinaélni rakom a megakpott tokent berrel majd a kivalasztott dolog id kikeres es bemasol
    5.login es logut 6. ng g c login routba pathba bead login componenst letrehoz inputokkal majd
    loginmodelt atadni a click esemenyre a loginba() majd authserviccel összekötni login ts-t majd ng modellel adatkotni html login
    7.token megjelenik ha postman is rendben van es tokenmodel class letrehoz definial token majd save elment majd 
    remove() es isLogged if +autthal összekotni a navot ha van else es iffel megjeleniteni*/

