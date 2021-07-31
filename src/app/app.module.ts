import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaTicketsComponent } from './componentes/tabla-tickets/tabla-tickets.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DetalleTicketComponent } from './componentes/detalle-ticket/detalle-ticket.component';
import { TablaAreasComponent } from './componentes/tabla-areas/tabla-areas.component';
import { DetalleAreaComponent } from './componentes/detalle-area/detalle-area.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { ListaDeTicketsComponent } from './paginas/lista-de-tickets/lista-de-tickets.component';
import { TablaUsuarioComponent } from './componentes/tabla-usuario/tabla-usuario.component';
import { AltaTicketComponent } from './paginas/alta-ticket/alta-ticket.component';
import { InspeccionTicketComponent } from './paginas/inspeccion-ticket/inspeccion-ticket.component';
import { InformesComponent } from './paginas/informes/informes.component';
import { LoginComponent } from './paginas/login/login.component';
import { ConServicioGuard } from './guards/con-servicio.guard';
import { PersonalGuard } from './guards/personal.guard';
import { LogueadoGuard } from './guards/logueado.guard';
import { NoLogueadoGuard  } from './guards/no-logueado.guard';
import { ErrorComponent } from './paginas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaTicketsComponent,
    NavbarComponent,
    DetalleTicketComponent,
    TablaAreasComponent,
    DetalleAreaComponent,
    DetalleUsuarioComponent,
    ListaDeTicketsComponent,
    TablaUsuarioComponent,
    AltaTicketComponent,
    InspeccionTicketComponent,
    InformesComponent,
    LoginComponent,
    ErrorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
