import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class InformeService {
	constructor(public http: HttpClient) {}

	clienteMasTickets() {
		return this.http.get("http://localhost:3000/api/informe/clienteMasTickets").toPromise();
	}

	clientesTicketsSinResolver() {
		return this.http.get("http://localhost:3000/api/informe/clientesTicketsSinResolver").toPromise();
	}

	masClientesPorZona() {
		return this.http.get("http://localhost:3000/api/informe/masClientesPorZona").toPromise();
	}

	clientesEmpleadosConTickets() {
		return this.http.get("http://localhost:3000/api/informe/clientesEmpleadosConTickets").toPromise();
	}

	atencionPorZona() {
		return this.http.get("http://localhost:3000/api/informe/atencionPorZona").toPromise();
	}

	desperfectoPorZona() {
		return this.http.get("http://localhost:3000/api/informe/desperfectoPorZona").toPromise();
	}

	personalMasTrabaja() {
		return this.http.get("http://localhost:3000/api/informe/personalMasTrabaja").toPromise();
	}

	horarioMasTrabajo() {
		return this.http.get("http://localhost:3000/api/informe/horarioMasTrabajo").toPromise();
	}

	personalTicketsSinResolver() {
		return this.http.get("http://localhost:3000/api/informe/personalTicketsSinResolver").toPromise();
	}

	desperfectoPorFecha() {
		return this.http.get("http://localhost:3000/api/informe/desperfectoPorFecha").toPromise();
	}

	desperfectoRecurrencia() {
		return this.http.get("http://localhost:3000/api/informe/desperfectoRecurrencia").toPromise();
	}

	cincoUsuariosMasCercanos() {
    let usuario = localStorage.getItem('usuario');
		return this.http.post("http://localhost:3000/api/informe/cincoUsuariosMasCercanos",JSON.parse(usuario)).toPromise();
	}
}
