import { Localidad } from './localidad';
import { Ticket } from './ticket';
import { Plan } from './plan';
import { Canal } from './canal';

export class Servicio {
    public _id: String;
	public id_cliente: String;
	public localidad: Localidad;
	public plan: Plan;
	public plan_canales: Canal[];
	public tickets: Ticket[];
	public fecha_alta:number;
	public fecha_baja: null| number;
	public estado: boolean;

	constructor(){}
}
