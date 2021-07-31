import { Localidad } from './localidad';
import { Ticket } from './ticket';
import { Usuario } from './usuario';


export class Area {
    public _id: String;
	public nombre: String;
	public tipo: "atencion_cliente"|"servicio_tecnico"|"servicio_financiero";
	public localidad: Localidad;
	public personal: Usuario[];
	public tickets: Ticket[];

	constructor(){}
}
