import { Usuario } from './usuario';
import { Solucion } from './solucion';
import { HistorialTicket } from './historial-ticket';

export class Ticket {
    public _id: String;
	public id_cliente: String;
	public id_servicio: String;
	public id_area: String;
	public id_encargadosAnteriores: String[]
	public id_encargado: null|String;
	public historial: HistorialTicket;
	public soluciones: Solucion[];
	public data: { tipo: String, descripcion: String, estado: String };
	public fecha_creacion: number;
	public fecha_modificacion: null|number;

	constructor(){}
}
