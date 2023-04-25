const axios = require("axios");
const apiKey = process.env.API_KEY;
// const { Dog, Temperament} = require("../db");

const findByNameApi = async (name) => {
    try {
        const { data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}&name=${name}`);
        
        const apiDogs = {
            id: data.id,
            name: data.name,
            temperament: data.temperament.map((el) => el.temperament.name),
            height: data.height.metric,
            weight: data.weight.metric,
            life_span: data.life_span,
            image: data.image.url
        };
        console.log("estamos en apiDogsPorNombre")
        return apiDogs
        
    } catch (error) {
        return {
            error: "Dog not found",
        };
        
    }
};


module.exports = findByNameApi