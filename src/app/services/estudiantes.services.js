const supabase = require("../config/supabaseAdmin");

// Obtener todos los estudiantes
const obtenerTodos = async () => {
    const { data, error } = await supabase
        .from("estudiantes")
        .select("*");

    if (error) {
        throw error;
    }

    return data;
};

// Obtener un estudiante por ID
const obtenerPorId = async (id) => {
    const { data, error } = await supabase
        .from("estudiantes")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }

        throw error;
    }

    return data;
};

// Crear un estudiante
const crear = async (datos) => {
    const { data, error } = await supabase
        .from("estudiantes")
        .insert([datos])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};

// Actualizar un estudiante
const actualizar = async (id, datos) => {
    const { data, error } = await supabase
        .from("estudiantes")
        .update(datos)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }

        throw error;
    }

    return data;
};

// Eliminar un estudiante
const eliminar = async (id) => {
    const { data, error } = await supabase
        .from("estudiantes")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }

        throw error;
    }

    return data;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};