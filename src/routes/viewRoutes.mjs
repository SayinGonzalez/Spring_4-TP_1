import express from 'express';
import { obtenerSuperheroePorIdController } from '../controllers/superheroesController.mjs';
const router = express.Router();

/* Spring 3 - TP3 */ // Renderizar vistas

// Vista agregar heroe
router.get("/agregar", (req, res) => {
    res.render("addSuperhero", { title: 'Añadir Superhéroes' }); // Renderiza views/addSuperhero.ejs
});

// Vista editar heroe 
router.get("/editar/:id", (req, res) => {
    // Obtiene el superhero mediante el controlador y precarga los datos en el form
    const { id } = req.params;
    res.redirect(`/api/heroes/${id}`);
});

// Vista dasboard
router.get("/heroes/dashboard", (req, res) => {
    res.redirect("/api/heroes/lista");
});

// Sprint 4

router.get("/index", (req, res) => {
    res.render("index", { title: 'Index'});
});
 
export default router;