const { Dog, Temperament } = require("../db"); // importo los modelos de la BD

const createDog = async (name, temperament, life_span, height, weight, image) => {

    try {

// Verifico que todos los campos requeridos estén presentes
    if (!name || !temperament || !life_span || !height || !weight || !image) {
        throw new Error("All fields are required");
      }

//Verifico si el perro ya existe antes de crearlo:
        const existingDog = await Dog.findOne({ where: {name}});
        if (existingDog) {
        throw new Error("Dog already exists!");
        }
        // if (name.length > 100) {
        // throw new Error("Name is too long");
        // }

// Obtengo los temperamentos como un array y los uno en un solo string separados por comas
        const temperamentArray = Array.isArray(temperament) ? temperament : [temperament];
        const temperamentString = temperamentArray.join(", ");
        

        const newDog = await Dog.create({
            name,
            temperament: temperamentString,
            life_span,
            height: height ? height : 0,
            weight: weight ? weight : 0,
            image: image ? image : "BUSCAR UNA IMAGEN"
        })
        
        const dogTemperament = await Temperament.findAll({
            where: {name: temperament}
        })
                
        newDog.addTemperament(dogTemperament); 

    } catch (error) {
        return error        
    }
};

module.exports = createDog;