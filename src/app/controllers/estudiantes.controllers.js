
const estudiantesService = require('../services/estudiantes.services');


const obtenerEstudiantes = (req, res) => {
    const estudiantes = estudiantesService.obtenerTodos();

    res.json(estudiantes);
};

const obtenerEstudiantePorId = (req, res) => {
    const id = parseInt(req.params.id);

    const estudiante = estudiantesService.obtenerPorId(id);

    if (!estudiante) {
        return res.status(404).json({
            error: "Estudiante no encontrado"
        });
    }        
}

const crearEstudiante = (req, res) => {
    const {nombre, correo, edad} = req.body;

    if (!nombre || !correo || !edad) {
        return res.status(400).json({
            error: "Faltan datos obligatorios"
        });
    }

    const nuevoEstudiante = estudiantesService.crear({
        nombre, 
        correo, 
        edad
    });

    res.status(201).json(nuevoEstudiante);
}

const actualizarEstudiante = (req, res) => {
    const id = Number(req.params.id);

    const datos = req.body;

    const estudianteActualizado = estudiantesService.actualizar(id, datos);

    if (!estudianteActualizado) {   
        return res.status(404).json({
            error: "Estudiante no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Estudiante actualizado correctamente",
        estudiante: estudianteActualizado
    });
};

const eliminarEstudiante = (req, res) => {
    const id = Number(req.params.id);

    const estudianteEliminado = estudiantesService.eliminar(id);

    if (!estudianteEliminado) {
        return res.status(404).json({
            error: "Estudiante no encontrado"
        });
    }
    
    res.status(200).json({
        mensaje: "Estudiante eliminado correctamente",
        estudiante: estudianteEliminado
    });

};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantePorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};