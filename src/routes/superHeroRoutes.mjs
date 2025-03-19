import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerSuperheroesPorPoderesController,
    crearNuevoSuperheroeController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/poderes/:valor', obtenerSuperheroesPorPoderesController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
/* Spring 3 - TP1 */
router.post('/heroes/crear', crearNuevoSuperheroeController);

export default router;