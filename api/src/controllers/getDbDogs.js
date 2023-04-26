const axios = require("axios");
const { Dog, Temperament } = require("../db");


const getDbDogs = async() => {
    try {
        const dbDogs = await Dog.findAll({
            include: {
                model: Temperament,
                through: {
                    attributes: ["name"],
                },  
            },
        })
        return dbDogs;
        
    } catch (error) {
        return error
    } 
};

module.exports = getDbDogs;