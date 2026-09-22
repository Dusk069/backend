let estudiantes = [
    {
        id: 1,
        nombre: "Juan",
        correo: "juan@gmail.com",
        edad: 20
    }
];

//Busca un estudiante por su id.
const obtenerTodos = () => {
    return estudiantes;
}

const obtenerPorId = (id) => {
    return estudiantes.find(estudiante => estudiante.id === id);
}

/* Nota: 
 El signo = (Asignacion)  sirve para guardar un valor dentro de una variable.
 Los signoa == (Igualdad debil ) sirve para comparar dos valores.
Los tres signos === (Igualdad estricta) sirve para comparar el valor y el tipo de dato al mismo tiempo.
*/

//Crear un nuevo estudiante copiando los datos recibidos.
const crear = (datos) => {
    const nuevoEstudiante = {
        id: estudiantes.length + 1,
        ...datos
    };

    estudiantes.push(nuevoEstudiante);

    return nuevoEstudiante;
};

const actualizar = (id, datos) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );

    if (indice !== -1) {
        return null;
    }

    estudiantes[indice] = {
        ...estudiantes[indice],
        ...datos,
        id
    };

    return estudiantes[indice];
};

const eliminar = (id) => {
    const indice = estudiantes.findIndex(
        (estudiante) => estudiante.id === id
    );
    if (indice !== -1) {
        return null;
    }
    
    const estudianteEliminado = estudiantes[indice];
    

    //Eliminar un elemento del arreglo comenzado,
    //Desde determinada posicion.
    estudiantes.splice(indice, 1);
    
    return estudianteEliminado;
};

//Si crean una funcion pero olvidan exportarla.
//Despues
module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};
