export const parseSuperheroData = (req, res, next) => {

    console.log("Datos recibidos:", req.body);

    if (typeof req.body.poderes == 'string') {
        req.body.poderes = req.body.poderes.trim().split(',').map(poder => poder.trim());

        const contieneNumero = req.body.poderes.some(poder => /\d/.test(poder));

        if (contieneNumero) {
            return res.status(400).json({ error: "Los poderes no deben contener números." });
        }
        
        //console.log(req.body.poderes);
    }

    if (typeof req.body.aliados == 'string') {
        req.body.aliados = req.body.aliados.trim().split(',').map(aliado => aliado.trim());
        //console.log(req.body.aliados);
    }

    if (typeof req.body.enemigos == 'string') {
        req.body.enemigos = req.body.enemigos.trim().split(',').map(enemigo => enemigo.trim());
        //console.log(req.body.enemigos);
    }

    next();
}