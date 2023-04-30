const { Dog, Temperament } = require("../db"); // importo los modelos de la BD

const createDog = async (name, temperament, life_span, height, weight, image) => {

    try {

// Verifico que todos los campos requeridos estén presentes
    if (!name || !temperament || !life_span || !height || !weight || !image) {
        throw new Error("All fields are required");
      }

//Verifico si el perro ya existe antes de crearlo:
        const existingDog = await Dog.findOne({ where: { name } });
        if (existingDog) {
        throw new Error("Dog already exists!");
        }
        // if (name.length > 100) {
        // throw new Error("Name is too long");
        // }

        const newDog = await Dog.create({
            name,
            temperament,
            life_span,
            height: height ? height : 0,
            weight: weight ? weight : 0,
            image: image ? image : "BUSCAR UNA IMAGEN"
        })
//creo la const dogTemperament para encontrar con el método "findAll" dentro de mi modelo 
//de Temperament donde el nombre sea el temperamento que traigo por body    

        const dogTemperament = await Temperament.findAll({
            where: {name: temperament}
        })
        // console.log(dogTemperament + "perris creados")

        newDog.addTemperament(dogTemperament); //agrega un nuevo temperament a un dog específico 

    } catch (error) {
        return error        
    }
};

module.exports = createDog;