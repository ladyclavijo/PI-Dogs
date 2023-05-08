const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;

const findByIdApi = async (id) => {
    try {
        const data = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data;
        const imageId = (await axios.get(`https://api.thedogapi.com/v1/images/${data.reference_image_id}?api_key=${API_KEY}`)).data
        return {
            id: data.id,
            name: data.name,
            image: imageId.url,
            height: data.height,
            weight: data.weight,
            life_span: data.life_span,
            temperaments: data.temperament 
        };
        
    } catch (error) {
        return { error: "Dog Not Found"};
    }
}

module.exports = findByIdApi;