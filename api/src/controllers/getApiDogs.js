const axios = require("axios"); 
require('dotenv').config();
const {API_KEY} = process.env;

// la fn "getApiDogs" usa axios para realizar una solicitud a la url de la API
// después recorre esa lista y almacena las urls de cada dog en el arreglo 'dogsUrl'
// para cada url en 'dogsUrl' se hace una solicitud a la API usando axios, esperando que devuelva una respuesta y una vez que se recibe esa respuesta, se extraen los datos del dog y los almacena en una variable

const getApiDogs = async() => {
        
    const urlDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&`); //hago destructuring de la data de axios
    
    const apiData = urlDogs.data.map(e => {
        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            temperament: e.temperament,
            createdDB: false        
        };
    })
    
    return apiData;  //espera y retorna el nuevo arreglo
};

module.exports = getApiDogs;