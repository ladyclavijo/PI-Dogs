const { Dog, Temperament } = require("../db");
const Sequelize = require("sequelize");
const op = Sequelize.Op;

// uso la fn findByNameDb para buscar un dog en la BD;
// la fn espera recibir como parámetro el nombre del dog que quiero buscar en la BD
// luego uso el método de sequelize "findOne" para buscar en la tabla "Dog" 
// que contenga el mismo nombre que el parámetro recibido
// Una vez encontrado, se almacena en la variable "dbDogs" y lo retorna

const findByNameDb = async (name) => {
    try {
        const dbDogs = await Dog.findOne({
            where: { name: { [op.iLike]: `%${name}%`}},
            include: [{
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }]
        });
        return dbDogs;

    } catch (error) {
        return error       
    }
};

module.exports = findByNameDb;