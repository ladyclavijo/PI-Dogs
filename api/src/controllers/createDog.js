const { Dog, Temperament } = require("../db"); // importo los modelos de la BD

const createDog = async (
    name,
    temperament,
    height,
    weight,
    life_span,
    image
) => {
// creo la const newDog para crear un nuevo dog a partir de la info que me traigo del body   

    try {
        const newDog = await Dog.create({
            name,
            temperament,
            height: height ? height : 0,
            weight: weight ? weight : 0,
            life_span,
            image: image ? image : "BUSCAR UNA IMAGEN"    
        })
//creo la const temperamentDog para encontrar con el método "findAll" dentro de mi modelo de Temperament, donde el nombre sea el temperamento que traigo por body    

        const temperamentDog = await Temperament.findAll({
            where: {name: temperament}
        })

        newDog.addTemperament(temperamentDog);

    } catch (error) {
        return error        
    }
};

module.exports = createDog;