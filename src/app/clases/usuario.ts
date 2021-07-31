import { Servicio } from './servicio';

export class Usuario {
    public _id: String;
    public nombre: String;
	public apellido: String;
	public dni: String;
	public fecha_nacimiento: number;
	public fecha_registro: number;
	public tipo: String;
	public ubicacion:{};
	public servicios: Servicio[];
	public area: null|String;

	constructor(){}
}
