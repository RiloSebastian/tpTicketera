import { tipoConsultaHttp } from '../../assets/mock/enumerators';
export interface consulta{
    nombre: String;
    paramsExtra: any;
	operacion: tipoConsultaHttp;
	objeto: any; 
}