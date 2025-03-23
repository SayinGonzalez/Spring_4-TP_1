import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerSuperheroesPorPoderesController,
    crearNuevoSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';
import { validationDataSuperHeros } from '../middlewares/validationRules.mjs';
import { handleValidationErrors } from '../middlewares/errorMiddleware.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/poderes/:valor', obtenerSuperheroesPorPoderesController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
/* Spring 3 - TP1 */ // Rutas agregadas
/* Spring 3 - TP2 */ // Validaciones agregadas a las rutas para actualizar y eliminar heroes
router.post('/heroes/crear', validationDataSuperHeros(), handleValidationErrors, crearNuevoSuperheroeController);
router.put('/heroes/actualizar/:id', validationDataSuperHeros(), handleValidationErrors, actualizarSuperheroeController);
router.delete('/heroes/eliminar/id/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController);

export default router;



/* 

                     función que valida que los         middleware
              ruta - datos cumplan las reglas   -   Verifica si hubo errores  -    Controlador
router.post('/ruta', registerValidationRules(),     handleValidationErrors,      funcionController)


*/