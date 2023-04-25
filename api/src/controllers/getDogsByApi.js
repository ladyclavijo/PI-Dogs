const axios = require("axios");
const apiKey = process.env.API_KEY;


const getDogsApi = async() => {
    
    const dogsApiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)
    
    const dogsApi = await dogsApiUrl.data.map(e => {
        return {
            id: e.id,
            name: e.name,
            temperament: e.temperament.map((el) => el.temperament.name),
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
            createdDB: false        
        };
    });
    return dogsApi;
};


module.exports = getDogsApi;