const { Dog, Temperament } = require("../db"); // importo los modelos de la bd
const getApiDogs = require("../controllers/getApiDogs");

const findAllDogs = async () => {
    try {
        const dogs = await Dog.findAll({//uso la fn findAll para obtener todos los dogs disponibles en la BD y los almaceno en la cte "dogs"
            
            include: [{
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: {exclude: ["createdAt", "updatedAt"]}
                }
            }]
        });

        const dogsApi = await getApiDogs();
        const allDogs = [...dogs, ...dogsApi];
        // console.log(allDogs.length + "todos los perris")
        return allDogs; // devuelvo los dogs de la api + BD
        
    } catch (error) {
        return error
    }
}; 

module.exports = findAllDogs;