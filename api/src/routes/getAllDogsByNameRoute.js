const { Router } = require("express");
const router = Router();
const allDogs = require("../controllers/allDogs");
const getDogsByNameApi = require("../controllers/getDogsByNameApi");
const getDogsByNameDb = require("../controllers/getDogsByNameDb");

router.get("/", async (req, res) => {

    try {
        const { name } = req.query; 
        
        if (name) {
            const apiDogsByName = await getDogsByNameApi(name);
            const dbDogsByName = await getDogsByNameDb(name);

//verifico si no hay dogs que coincidan con el nombre de búsqueda en la API ni en la BD y envío una
//respuesta de error en ese caso. Si solo uno de los arrays está vacío, significa que se encontró al
//menos un dog en la otra fuente de datos, por lo que no se debería enviar una respuesta de error

            if (!apiDogsByName && !dbDogsByName) return res.status(404).send("Name Not Found!")

            if (dbDogsByName === null) return res.status(200).send([apiDogsByName])
            else return res.status(200).send([dbDogsByName])
        }

        if (!name) {
            const allDogsList = await allDogs();
            return res.status(200).send(allDogsList)
        }
    }
    catch (error) {
        return res.status(404).send(error)        
    }
});

module.exports = router;