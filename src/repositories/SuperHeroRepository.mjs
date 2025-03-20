import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {

    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await SuperHero.find({ [atributo]: valor });
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2] }
            //poderes: { $size: { $gte: 2 } }
        });
        // return await SuperHero.find( hero => hero.edad > 30 );
    }

    async obtenerPorPoderes(valor) {
        return await SuperHero.find({ poderes: valor });
    }

    /* Spring 3 - TP1 */
    //    Crear Nuevo Heroe    //
    async crearSuperheroe(datosSuperheroe) {

        /* SuperHero.create(datosSuperheroe);
        const superheroeCreado = await SuperHero.find({ nombreSuperHeroe: datosSuperheroe.nombreSuperHeroe });

        console.log(`Superheroe: ${superheroeCreado}`);
        return superheroeCreado; */

        const nuevoHeroe = new SuperHero(datosSuperheroe);
        //console.log(nuevoHeroe);
        return await nuevoHeroe.save();

    }

    //    Actualizar Heroe    //
    async actualizarHeroe(id, datosActualizar) {
        
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento modificado */

        //  { new: true } con este parámetro me devuelve el documento con los datos nuevos ya modificados
        //  Sin dicho parámetro se modifica el documento en la BD pero me devuelve el obj. literal con los datos sin modificar
        const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datosActualizar, { new: true });
        console.log(heroeActualizado);
        return heroeActualizado;
        
    }

    //    Eliminar Heroe por ID     //
    async eliminarPorId(id){
        const heroeEliminado = await SuperHero.findByIdAndDelete(id);
        console.log(heroeEliminado);
        return heroeEliminado;
    }

    //    Eliminar Heroe por Nombre    //
    async eliminarPorNombre(nombre){
        // findByIdAndDelete() y findOneAndDelete() también devuelven el documento modificado
        const heroeEliminado = SuperHero.findOneAndDelete({nombreSuperHeroe: nombre});
        console.log(heroeEliminado);
        return heroeEliminado;
    }
}

export default new SuperHeroRepository();