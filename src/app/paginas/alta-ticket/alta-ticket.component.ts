import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from '../../clases/ticket';
import { Servicio } from '../../clases/servicio';
import { ClienteService } from '../../servicios/cliente.service';
import { Usuario } from 'src/app/clases/usuario';
import { TipoTicketEnum, estadoTicketEnum } from '../../../assets/mock/enumerators';

@Component({
  selector: 'app-alta-ticket',
  templateUrl: './alta-ticket.component.html',
  styles: [':host { flex: 1;}'],
  styleUrls: ['./alta-ticket.component.css'],
})
export class AltaTicketComponent implements OnInit {
  public servicioSelect: Servicio = null;
  public tipoSelect: String = '';
  public inpDescripcion: String = '';
  public servicios: Array<Servicio> = [];
  public ticketJson: Ticket = new Ticket();
  public usuarioLog: Usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;
  public estadoTicket = estadoTicketEnum;
  public tipoTicket = TipoTicketEnum;

  constructor(public clientes: ClienteService) {}

  ngOnInit(): void {
    this.clientes.obtenerServiciosUsuario(this.usuarioLog._id).then(serviciosDB =>{
      this.servicios = serviciosDB;
      this.servicioSelect = this.servicios[0];
      this.tipoSelect = 'desperfecto';
    });
  }

  seleccionarTipo(tipo){
    this.tipoSelect = tipo;
    console.log(this.tipoSelect);
  }

  seleccionarServicio(servicio){
    this.servicioSelect = servicio;
    console.log(this.servicioSelect);
  }

  generarTicket() {
    this.ticketJson.fecha_creacion = Date.now();
    this.ticketJson.data = {tipo: this.tipoSelect, descripcion: this.inpDescripcion, estado: this.estadoTicket.pendiente};
    this.ticketJson.id_cliente = this.usuarioLog._id;
    this.ticketJson.id_servicio = this.servicioSelect._id;
    this.ticketJson.id_area = null;
    this.ticketJson.historial = null;
    this.ticketJson.id_encargado = null;
    this.ticketJson.fecha_modificacion = null;
    this.clientes.generarticket(this.ticketJson);
  }
}
