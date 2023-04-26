const axios = require("axios");
const { getApiDogs } = require("./getApiDogs");
const { getDbDogs } = require("./getDbDogs");

const getAllDogs = async () => {

    let apiDogs = await getApiDogs();
    let dbDogs = await getDbDogs();
    let allDogs = apiDogs.concat(dbDogs);

    return allDogs;
};

module.exports = getAllDogs;