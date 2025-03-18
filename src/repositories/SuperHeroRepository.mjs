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

    async obtenerMayoresDe30 () {
        return await SuperHero.find({ 
            edad: { $gt: 30 }, 
            planetaOrigen: "Tierra",
            $expr: { $gte: [{ $size: "$poderes" }, 2] }
            //poderes: { $size: { $gte: 2 } }
        });
        // return await SuperHero.find( hero => hero.edad > 30 );
    }

    async obtenerPorPoderes(valor){
        return await SuperHero.find({ poderes: valor });
    }
  
}

export default new SuperHeroRepository();