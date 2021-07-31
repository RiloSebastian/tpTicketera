import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component'
import { InformesComponent } from './paginas/informes/informes.component';
import { ListaDeTicketsComponent } from './paginas/lista-de-tickets/lista-de-tickets.component';
import { AltaTicketComponent } from './paginas/alta-ticket/alta-ticket.component';
import { InspeccionTicketComponent } from './paginas/inspeccion-ticket/inspeccion-ticket.component';
import { ErrorComponent } from './paginas/error/error.component';
import { ConServicioGuard } from './guards/con-servicio.guard';
import { PersonalGuard } from './guards/personal.guard';
import { LogueadoGuard } from './guards/logueado.guard';
import { NoLogueadoGuard  } from './guards/no-logueado.guard';

const routes: Routes = [
  {path: "", component: LoginComponent, canActivate:[NoLogueadoGuard]},
  {path: "informes", component: InformesComponent, canActivate:[LogueadoGuard,PersonalGuard]},
  {path: "tickets", component: ListaDeTicketsComponent, canActivate:[LogueadoGuard,PersonalGuard]},
  {path: "generar-ticket", component: AltaTicketComponent, canActivate:[LogueadoGuard, ConServicioGuard]},
  {path: "inspeccionar-ticket", component: InspeccionTicketComponent, canActivate:[LogueadoGuard,PersonalGuard]},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
