import { body } from 'express-validator';

export const validationDataSuperHeros = () => [

    body('nombreSuperHeroe')
        //.exists()
        .trim()
        .notEmpty().withMessage('Nombre del superheroe es necesario')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre del heroe debe tener entre 3 y 60 caracteres'),

    body('nombreReal')
        //.exists()
        .trim()
        .notEmpty().withMessage('Nombre Real es requerido')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre real debe tener entre 3 y 60 caracteres'),

    body('edad')
        //.exists()
        .trim()
        .notEmpty().withMessage('Edad es requerida')
        .isNumeric().withMessage("La edad debe ser un número")
        .isInt({ min: 0 }).withMessage('Edad incorrecta'),

    body('poderes')
        //.exists()
        .notEmpty().withMessage('Lista de poderes requerida')
        .isArray({ min: 1 }).withMessage('Poderes no es un array o está vacío'),
    body('poderes.*')
        .trim()
        .isString().withMessage('Cada poder debe ser una cadena de texto')
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres')
        .matches(/^[^\d]*$/).withMessage('Los poderes no deben contener números.'),
]
