import { Usuario } from './usuario';

export class HistorialTicket {
    public _id: String;
	public id_ticket: String;
	public historial: [{id_usuarioGenerador: String, descripcion: String, fecha_emision: number}];

	constructor(){}
}
