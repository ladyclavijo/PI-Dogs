const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;
const { Temperament } = require("../db");


const allTemperaments = async () => {

    try {
 
    const temps = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`) //me traigo en forma de arreglo los temperaments

    temps.data.forEach(e => { // analizo cada elemento del arreglo de razas
        if (e.temperament){
            let foundTemps = e.temperament.split(", ");
//Esta parte del código es importante xq divide los temperamentos de las razas de dogs en temperamentos
//individuales, lo que facilita el proceso de agregarlos a la BD

            foundTemps.forEach(e => {// recorre cada raza de perro y si tiene un temp definido, lo recorre
                Temperament.findOrCreate({//busca y sino lo encuentra lo crea
                    where: { name: e}
                })
            })
        }
    });
     const findTemps = await Temperament.findAll(); 
     return findTemps; //devuelve todos los temperamentos almacenados en la BD usand findAll
    
    } catch (error) {
            return error        
        }
};

//En resumen, esta fn obtiene los temperamentos de las razas de dogs de la API
//y los guarda en una BD para su uso posterior

module.exports = allTemperaments;