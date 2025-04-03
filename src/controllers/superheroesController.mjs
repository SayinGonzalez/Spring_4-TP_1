import {
    obtenerSuperHeroePorId,
    obtenerTodosLosSuperHeroes,
    buscarSuperHeroesPorAtributo,
    obtenerSuperHeroesMayoresDe30,
    obtenerSuperheroesPorPoderes,
    crearNuevoSuperheroe,
    actualizarSuperheroe,
    eliminarSuperheroePorId,
    eliminarSuperheroePorNombre
} from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListasSuperheroes } from '../views/responseView.mjs';


export async function obtenerSuperheroePorIdController(req, res) {
    try {
        
        const { id } = req.params;
        const superheroe = await obtenerSuperHeroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        res.render("editSuperhero", { superheroe });

        /* // En vez de enviar respuesta aquí, pasamos los datos al siguiente middleware
        req.superheroe = superheroe; */

        /* const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado); */

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });

    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperHeroes();
        res.render('dashboard', { superheroes });
        
        //const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        //res.status(200).json(superheroesFormateados);

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {

        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperHeroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });

    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {

        const superheroes = await obtenerSuperHeroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }

        const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });

    }
}

export async function obtenerSuperheroesPorPoderesController(req, res) {
    try {
        console.log(req);
        const { valor } = req.params;
        const superheroes = await obtenerSuperheroesPorPoderes(valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con esos poderes' });
        }

        const superheroesFormateados = renderizarListasSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);

    } catch (error) {

        res.status(500).send({ mensaje: 'Error al obtener superhéroes con esos poderes', error: error.message });

    }
}

/* Spring 3 - TP1 */
export async function crearNuevoSuperheroeController(req, res) {
    try {

        const datos = req.body;

        const superheroeCreado = await crearNuevoSuperheroe(datos);
        if (!superheroeCreado) {
            return res.status(404).send({ mensaje: 'Superhéroe nuevo no encontrado' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperHeroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe creado exitosamente!' });

        //const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        //res.status(200).json(superheroeFormateado);

    } catch (error) {
        //res.status(500).render('addSuperhero', { errorMessage: error.message });
        res.render('dashboard', {
            errorMessage: 'Hubo un error al crear el superhéroe. Asegúrate de completar todos los campos correctamente.'
        });
    }
}

export async function actualizarSuperheroeController(req, res) {
    try {

        const { id } = req.params;
        const datosActualizar = req.body;

        console.log(id);
        console.log(typeof (id));
        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizar);

        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe a actualizar no encontrado.' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperHeroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe editado exitosamente!' });

        // const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
        // res.status(200).json(superheroeFormateado);

        /* 
        Tren - 5 vagones
        
        bagon 1              |    bagon 2                  |    bagon 3          |    bagon 4                    |     bagon 5
      ---------------------------------------------------------------------------------------------------------------------------
        routes               |    controllers              |    services         |    repository                 |     DB
        peticiones           |    capturar y respondemos   |    lógica           |    buscar, traer y devolver   |     datos
        ingresa lo que       |    ruta, body               |    operacion,       |    CRUD                       |    
        quiere el usuario    |                             |    conversiones     |                               |    

        */


    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try {

        const { id } = req.params;

        const superheroeEliminado = await eliminarSuperheroePorId(id);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar por ID no encontrado.' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperHeroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe eliminado exitosamente!' });

        /* const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado); */

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe por ID', error: error.message });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {

        const { nombre } = req.params;

        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar por nombre no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe por nombre', error: error.message });
    }
}