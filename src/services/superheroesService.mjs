import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function obtenerSuperheroesPorPoderes(valor) {
    return await SuperHeroRepository.obtenerPorPoderes(valor);
}

/* Spring 3 - TP1 */
//    Crear Nuevo Heroe    //
export async function crearNuevoSuperheroe(datosNuevoSuperheroe) {
    return await SuperHeroRepository.crearSuperheroe(datosNuevoSuperheroe);
}

//    Actualizar Heroe    //
export async function actualizarSuperheroe(id, datosActualizarSuperheroe) {
    return await SuperHeroRepository.actualizarHeroe(id, datosActualizarSuperheroe);    
}

//    Eliminar Heroe por ID     //
export async function eliminarSuperheroePorId(id) {
    return await SuperHeroRepository.eliminarPorId(id);
}

//    Eliminar Heroe por Nombre    //
export async function eliminarSuperheroePorNombre(nombre) {
    return await SuperHeroRepository.eliminarPorNombre(nombre);
}

