import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let usuario: any = JSON.parse(localStorage.getItem('usuario'));
      if (usuario.tipo === "Personal" || usuario.tipo === "Responsable_ticket") {
        return true;
      } else {
        this.router.navigate(['error']);
        return false;
      }
  }
  
}
