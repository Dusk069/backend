const express = require("express");

//Un router permite agrupar rutas de un recurso.
const router = express.Router();

const estudiantesController = require("../controllers/estudiantes.controllers");


//cuando llegue un GET a la ruta principal de estudaintes, ejecuta obtenerEstudiantes.
router.get("/", estudiantesController.obtenerEstudiantes);

//El :id es un parametro dinamico.
router.get("/:id", estudiantesController.obtenerEstudiantePorId);

//Esta ruta permite crear un estudiante.
router.post("/", estudiantesController.crearEstudiante);

//Esta ruta permite actualizar un estudiante.
router.put("/:id", estudiantesController.actualizarEstudiante);

//Esta ruta permite eliminar un estudiante.
router.delete("/:id", estudiantesController.eliminarEstudiante);


module.exports = router;
