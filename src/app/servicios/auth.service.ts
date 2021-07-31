import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public logueado: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public http: HttpClient) {
    if(localStorage.getItem('usuario') !== null){
      this.logueado.next(true);
    } else{
      this.logueado.next(false);
    }
  }

  login(user: any) {
    return this.http
      .post('http://localhost:3000/api/auth/login', user, {
        responseType: 'json',
      })
      .toPromise()
      .then((usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.logueado.next(true);
        return JSON.parse(JSON.stringify(usuario));
      });
  }

  logout() {
    localStorage.removeItem('usuario');
    this.logueado.next(false);
  }
}
