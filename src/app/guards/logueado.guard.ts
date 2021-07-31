import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogueadoGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let x = JSON.parse(localStorage.getItem('usuario'));
    if(x !== null){
      return true;
    } else{
      this.router.navigate(['error']);
        return false;
      return false;
    }
  }
  
}
