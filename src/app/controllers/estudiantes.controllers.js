const estudiantesService = require("../services/estudiantes.services");

// Obtener todos los estudiantes
const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await estudiantesService.obtenerTodos();

        res.status(200).json(estudiantes);
    } catch (error) {
        console.error("Error al obtener estudiantes:", error);

        res.status(500).json({
            error: "Error al obtener los estudiantes"
        });
    }
};

// Obtener estudiante por ID
const obtenerEstudiantePorId = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({
                error: "El ID debe ser un número"
            });
        }

        const estudiante = await estudiantesService.obtenerPorId(id);

        if (!estudiante) {
            return res.status(404).json({
                error: "Estudiante no encontrado"
            });
        }

        res.status(200).json(estudiante);
    } catch (error) {
        console.error("Error al obtener estudiante:", error);

        res.status(500).json({
            error: "Error al obtener el estudiante"
        });
    }
};

// Crear estudiante
const crearEstudiante = async (req, res) => {
    try {
        const { nombre, correo, edad } = req.body;

        if (!nombre || !correo || edad === undefined) {
            return res.status(400).json({
                error: "Faltan datos obligatorios"
            });
        }

        const nuevoEstudiante = await estudiantesService.crear({
            nombre,
            correo,
            edad
        });

        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        console.error("Error al crear estudiante:", error);

        res.status(500).json({
            error: "Error al crear el estudiante"
        });
    }
};

// Actualizar estudiante
const actualizarEstudiante = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({
                error: "El ID debe ser un número"
            });
        }

        const estudianteActualizado =
            await estudiantesService.actualizar(id, req.body);

        if (!estudianteActualizado) {
            return res.status(404).json({
                error: "Estudiante no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Estudiante actualizado correctamente",
            estudiante: estudianteActualizado
        });
    } catch (error) {
        console.error("Error al actualizar estudiante:", error);

        res.status(500).json({
            error: "Error al actualizar el estudiante"
        });
    }
};

// Eliminar estudiante
const eliminarEstudiante = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({
                error: "El ID debe ser un número"
            });
        }

        const estudianteEliminado =
            await estudiantesService.eliminar(id);

        if (!estudianteEliminado) {
            return res.status(404).json({
                error: "Estudiante no encontrado"
            });
        }

        res.status(200).json({
            mensaje: "Estudiante eliminado correctamente",
            estudiante: estudianteEliminado
        });
    } catch (error) {
        console.error("Error al eliminar estudiante:", error);

        res.status(500).json({
            error: "Error al eliminar el estudiante"
        });
    }
};

module.exports = {
    obtenerEstudiantes,
    obtenerEstudiantePorId,
    crearEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
};