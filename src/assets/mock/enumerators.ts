export enum TipoTicketEnum {
  desperfecto = 'desperfecto',
  cambio_de_plan = 'cambio_de_plan',
  dar_de_baja = 'dar_de_baja',
  dar_de_alta = 'dar_de_alta',
}

export enum estadoTicketEnum {
  pendiente = 'pendiente',
  bajo_revision = 'bajo_revision',
  resuelto = 'resuelto',
}

export enum estadoSolucionTicket {
  pendiente = 'pendiente',
  exitoso = 'exitoso',
  fallido = 'fallido'
}

export enum tipoUsuario {
  cliente = 'Cliente',
  personal = 'Personal',
  responsable_ticket = 'Responsable_ticket',
}

export enum tipoArea {
  atencion_al_cliente = 'atencion_al_cliente',
  servicio_tecnico = 'servicio_tecnico',
  servicio_financiero = 'servicio_financiero',
}

export enum tipoConsultaHttp {
  AM = 'AM',
  B ='B'
}
