import { Component, OnInit } from "@angular/core";
import { InformeService } from "../../servicios/informe.service";

@Component({
	selector: "app-informes",
	templateUrl: "./informes.component.html",
	styles: [":host { flex: 1;}"],
	styleUrls: ["./informes.component.css"]
})
export class InformesComponent implements OnInit {
	private flagValor: number = -1;
	public arrayData: String = null;

	constructor(public informes: InformeService) {}

	ngOnInit(): void {}

	obtenerData(clave: String) {
		switch (clave) {
			case "clienteMasTickets":
				this.informes.clienteMasTickets().then((data) => {
					this.arrayData = JSON.stringify(data,null,1)
					console.log(this.arrayData);
					this.flagValor = 1;
				});
				break;
			case "clientesTicketsSinResolver":
				this.informes.clientesTicketsSinResolver().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);

					this.flagValor = 2;
				});
				break;
			case "masClientesPorZona":
				this.informes.masClientesPorZona().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 3;
				});
				break;
			case "clientesEmpleadosConTickets":
				this.informes.clientesEmpleadosConTickets().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 4;
				});
				break;
			case "atencionPorZona":
				this.informes.atencionPorZona().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 5;
				});
				break;
			case "desperfectoPorZona":
				this.informes.desperfectoPorZona().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 6;
				});
				break;
			case "personalMasTrabaja":
				this.informes.personalMasTrabaja().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 7;
				});
				break;
			case "horarioMasTrabajo":
				this.informes.horarioMasTrabajo().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 8;
				});
				break;
			case "personalTicketsSinResolver":
				this.informes.personalTicketsSinResolver().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 9;
				});
				break;
			case "desperfectoPorFecha":
				this.informes.desperfectoPorFecha().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 10;
				});
				break;
			case "desperfectoRecurrencia":
				this.informes.desperfectoRecurrencia().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 11;
				});
				break;
			case "cincoUsuariosMasCercanos":
				this.informes.cincoUsuariosMasCercanos().then((data) => {
					this.arrayData = JSON.stringify(data,null,4)
					console.log(this.arrayData);
					this.flagValor = 12;
				});
				break;
		}
	}
}
