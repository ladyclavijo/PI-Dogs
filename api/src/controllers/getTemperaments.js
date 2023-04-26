const axios = require("axios");
const apiKey = process.env.API_KEY;
const { Temperament } = require("../db");

const getAllTemperaments = async () => {

    let getInfoTemperaments = async() => {
        return await Temperament.findAll() // me traigo toda la info que encuentre en el modelo Temperament
    }

      try {
           if(getInfoTemperaments.length === 0) { // aquí pregunto sino existe esa info
            const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`); //sino existe, la traigo de la API
            const dataTypes = data.results; // guardo la info que traigo de la API
        
            dataTypes.map((el) => { // mapeo la info de la API
            Temperament.findOrCreate({ //entro a Temperament y busco hacer un match con el nombre del type y el nombre del elemento, sino hay match, lo creo.. si sí lo hay, lo devuelvo
                where: {name: el.name}
            });
            });

            getInfoTemperaments = await Temperament.findAll(); // reasigno la variable en la cual voy a buscar toda la info que ahora existe en Type
      
            return getInfoTemperaments 
           } 
           return getInfoTemperaments //devuelvo si hay info en Type

      } 
        catch (error) {
            return error        
        }
};

module.exports = getAllTemperaments;