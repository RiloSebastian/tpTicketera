# Ticketera

## Importacion y exportacion de colleciones a Cloud Atlas

### Exportacion:
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=areas --out=areas.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=auths --out=auths.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=historial_tickets --out=historial_tickets.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=localidades --out=localidades.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=planes --out=planes.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=canales --out=canales.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=solucion_ticket --out=solucion_ticket.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=servicios --out=servicios.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=tickets --out=tickets.json
 - mongoexport --uri="mongodb://localhost:27017/Ticketera" --collection=usuarios --out=usuarios.json

### Importacion: 
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=areas --file=areas.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=auths --file=auths.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=historial_tickets --file=historial_tickets.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=localidades --file=localidades.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=planes --file=planes.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=canales --file=canales.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=solucion_ticket --file=solucion_ticket.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=servicios --file=servicios.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=tickets --file=tickets.json
 - mongoexport --uri="mongodb+srv://sebastian_rilo:<password>@primercluster.utc0y.mongodb.net/Ticketera" --collection=usuarios --file=usuarios.json
  
  ----------------------------------------------
  ## Usuario con acceso a solo lectura en la DB Ticketera:
  - username: octavio_villegas
  - password: octavio1234
  
