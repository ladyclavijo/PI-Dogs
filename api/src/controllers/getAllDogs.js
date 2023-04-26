const axios = require("axios");
const apiKey = process.env.API_KEY;


const  getApiDogs = require("./getApiDogs");
const  getDbDogs = require("./getDbDogs");

const getAllDogs = async () => {

    const apiDogs = await getApiDogs();
    let dbDogs = await getDbDogs();

    const allDogs = apiDogs.concat(dbDogs);

    return allDogs;
};

module.exports = getAllDogs;