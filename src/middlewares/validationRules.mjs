import { body } from 'express-validator';

export const validationDataSuperHeros = () => [
    body('nombreSuperHeroe').notEmpty().withMessage('Nombre del superheroe es necesario')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre del heroe debe tener entre 3 y 60 caracteres')
        .trim(),
    body('nombreReal').notEmpty().withMessage('Nombre Real es requerido')
        .isLength({ min: 3, max: 60 }).withMessage('Nombre real debe tener entre 3 y 60 caracteres')
        .trim(),
    body('edad').notEmpty().withMessage('Edad es requerida')
        .isInt({ min: 0 }).withMessage('Edad incorrecta')
        .trim(),
    body('poderes').notEmpty().withMessage('Lista de poderes requerida')
        .isArray({ min: 1 }).withMessage('Poderes no es un array o está vacío'),
    body('poderes.*')
        .isString().withMessage('Cada poder debe ser una cadena de texto')
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres')
        .trim()
]
