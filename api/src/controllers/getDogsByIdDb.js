const { Dog, Temperament } = require("../db");

//la fn findById busca en la BD el dog q tenga = ID q el valor pasado como parámetro (usando sequelize)
//la fn es asíncrona y devuelve un objeto que contiene la info sobre el dog

const findByIdDb = async (id) => {
    try {
        const dbDogsId = await Dog.findOne({
            where: { id: id },
            include: [Temperament]
        });
        return dbDogsId;
        
    } catch (error) {
        return error
    }
};

module.exports = findByIdDb