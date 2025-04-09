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
import { parseSuperheroData } from '../middlewares/parseData.mjs';

const router = express.Router();

router.get('/', obtenerTodosLosSuperheroesController);
router.get('/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/:id', obtenerSuperheroePorIdController);
router.get('/buscar/poderes/:valor', obtenerSuperheroesPorPoderesController);
router.get('/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

/* Spring 3 - TP1 */ // Rutas agregadas
/* Spring 3 - TP2 */ // Validaciones agregadas a las rutas para actualizar y eliminar heroes
/* Spring 3 - TP3 */ // Parseo de datos antes de las validaciones
router.post('/agregar', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, crearNuevoSuperheroeController);
router.put('/editar/:id', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, actualizarSuperheroeController);
router.delete('/eliminar/id/:id', eliminarSuperheroePorIdController);
router.delete('/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController);

export default router;



/* 

                     función que valida que los         middleware
              ruta - datos cumplan las reglas   -   Verifica si hubo errores  -    Controlador
router.post('/ruta', registerValidationRules(),     handleValidationErrors,      funcionController)


*/