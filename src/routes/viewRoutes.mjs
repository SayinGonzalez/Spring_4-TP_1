import express from 'express';
import { obtenerSuperheroePorIdController } from '../controllers/superheroesController.mjs';
const router = express.Router();

/* Spring 3 - TP3 */ // Renderizar vistas

// Vista agregar heroe
router.get("/agregar", (req, res) => {
    res.render("addSuperhero"); // Renderiza views/addSuperhero.ejs
});

// Vista editar heroe 
router.get("/editar/:id", obtenerSuperheroePorIdController);
// Obtiene el superhero mediante el controlador y precarga los datos en el form
 
export default router;