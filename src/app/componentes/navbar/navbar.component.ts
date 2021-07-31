import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public usuario: any = null;

  constructor(public auth: AuthService, public router: Router) { }
  
  ngOnInit(): void {
    this.auth.logueado.subscribe(valorBool =>{
      console.log('cambio de estado usuario');
      console.log(valorBool);
      if(valorBool == true){
        this.usuario= JSON.parse(localStorage.getItem('usuario'));
        console.log(this.usuario);
      } else{
        this.usuario = null;
      }
    });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
