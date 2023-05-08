const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;

const findByNameApi = async (name) => {
    
    try {
        const data = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&name=${name}`)).data[0];
        console.log(data)
        const dogApi = {
            id: data.id,
            name: data.name,
            image: data.image.url,
            height: data.height,
            weight: data.weight,
            life_span: data.life_span,
            temperaments: data.temperament
        };
        return dogApi;
       
    } catch (error) {
        return {
            error: "Dog Not Found",
        };
    }
};

module.exports =  findByNameApi;