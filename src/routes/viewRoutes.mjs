import express from 'express';
const router = express.Router();


// Sprint 4
// router.get(["/", "/index", "/index/"], ...); -> con regex
// router.get(/^\/(index)?\/?$/i, ...); -> con array de rutas

router.get("/index", (req, res) => {
    res.render("index", { title: 'Index'});
});


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
router.get("/dashboard", (req, res) => {
    res.redirect("/api/heroes/dashboard");
});
 
export default router;