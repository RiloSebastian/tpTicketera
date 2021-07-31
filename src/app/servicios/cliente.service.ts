import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Servicio } from "../clases/servicio";
import { consulta } from "../interfaces/consulta";
import { tipoConsultaHttp } from "../../assets/mock/enumerators";

@Injectable({
	providedIn: "root"
})
export class ClienteService {
	constructor(public http: HttpClient) {}

	obtenerServiciosUsuario(idCliente: String) {
		let param = { servicioUserId: idCliente.toString() };
		return this.http
			.get("http://localhost:3000/api/servicio-cliente", { params: param, responseType: "json" })
			.toPromise()
			.then((serviciosDB) => {
				let servicios: Array<Servicio> = JSON.parse(JSON.stringify(serviciosDB)).map((servicio) => {
					return { ...(servicio as Servicio) };
				});
				return servicios;
			});
	}

	generarticket(ticket) {
		let body = { nombre: "generarTicket", paramsExtra: null, obj: ticket, operacion: tipoConsultaHttp.AM };
    console.log(body);
		return this.http.post("http://localhost:3000/api/generar-ticket", body, { responseType: "json" }).toPromise();
	}
}
