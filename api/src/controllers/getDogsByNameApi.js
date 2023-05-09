const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;

const findByNameApi = async (name) => {
    
    try {
        const data = (await axios.get(`https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&name=${name}`)).data[0];
        const imageId = (await axios.get(`https://api.thedogapi.com/v1/images/${data.reference_image_id}?api_key=${API_KEY}`)).data

        const dogApi = {
            id: data.id,
            name: data.name,
            image: imageId.url,
            height: data.height.metric,
            weight: data.weight.metric,
            life_span: data.life_span,
            temperaments: data.temperament
        };
        
        console.log(dogApi)

        return dogApi;
       
    } catch (error) {
        return {
            error: "Dog Not Found",
        };
    }
};

module.exports =  findByNameApi;