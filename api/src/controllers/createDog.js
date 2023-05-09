const { Dog, Temperament } = require("../db"); // importo los modelos de la BD

const createDog = async (name, temperaments, life_span, height, weight, image) => {
    
    try {
// Verifico que todos los campos requeridos estén presentes
    if (!name || !temperaments || !life_span || !height || !weight || !image) {
        throw new Error("All fields are required");
      }

//Verifico si el perro ya existe antes de crearlo:
        const existingDog = await Dog.findOne({ where: {name}});
        if (existingDog) {
        throw new Error("Dog already exists!");
        }

// Obtengo los temperamentos como un array y los uno en un solo string separados por comas
        const temperamentArray = Array.isArray(temperaments) ? temperaments : [temperaments];
        
        const temperamentString = temperamentArray.join(", ");
        
        const newDog = await Dog.create({
            name,
            temperaments: temperamentString,
            life_span,
            height: height ? height : 0,
            weight: weight ? weight : 0,
            image: image ? image : "BUSCAR UNA IMAGEN"
        })
        // console.log(newDog + "vengo del Back a salvarte")
        
        const dogTemperament = await Temperament.findAll({
            where: {name: temperaments}
        })
                
        newDog.addTemperament(dogTemperament); 

    } catch (error) {
        return error        
    }
};

module.exports = createDog;