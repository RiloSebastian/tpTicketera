import { Component, OnInit } from '@angular/core';
import { auths } from '../../../assets/mock/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [':host { flex: 1;}'],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public listaAuths: Array<any> = auths;
  public user: any = null;

  constructor(public auth: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.user = this.listaAuths[0];
  }

  seleccionarUsuario(usuario) {
    console.log('entro');
    this.user = usuario;
  }

  login() {
    console.log(this.user);
    this.auth.login(this.user).then( usuario => {
      if(usuario.tipo === 'Responsable_ticket' || usuario.tipo === 'Personal'){
        this.router.navigate(['tickets']);
      } else{
        this.router.navigate(['generar-ticket']);
      }
    });
  }
}
