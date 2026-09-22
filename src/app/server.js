//Este archivo sera el punto de entrada del servidor.
// su unica responsabilidad es levantar el servidor.


// estamos importando la aplicacion que configuramos en otro archivo.
const app = require("./app");
// guardamos el puerto en una constante.
const port = 3000;


// le indicamos que escuche las solicitudes en ese puerto.
app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
