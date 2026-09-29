// este archivo tendra la configuracion principal de express.

//importamos el express
//importamos el express
const express = require("express");
const estudiantesRoutes = require("./routes/estudiantes.routes");

// creamos la aplicacion
const app = express();

// permite que express pueda recibir datos enviados en formato JSON
app.use(express.json());

app.get("/", (req, res) => {
	res.send("API funcionando correctamente");
});

app.use("/estudiantes", estudiantesRoutes);

// esta linea permite que server.js pueda utilizar la aplicacion.
module.exports = app;
