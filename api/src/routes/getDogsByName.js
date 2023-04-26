const { Router } = require("express");
const router = Router();
const { getAllDogs, getDbDogs } = require("../controllers/getAllDogs");

router.get("/", async(req, res) => {
    const name = req.query.name.toLowerCase();
    let dogs = [];
    
    try {
        if(name) { //Si se proporcionó un nombre de dog válido, se llama a las funciones getAllDogs y getDbDogs para obtener los dogs de la API y la BD
            const allDogs = await getAllDogs();
            const dbDogs = await getDbDogs();
            dogs = [...allDogs, ...dbDogs].filter((e) => e.name.toLowerCase().includes(name)); //se utiliza el operador spread (...) para concatenar los dos arreglos de dogs en un solo arreglo
        } else {
            res.status(400).send("Please provide a dog name to search"); //Si no se proporcionó un nombre válido, se devuelve un error
        }
//se usa el método filter para filtrar los dogs por nombre, usando el nombre del dog proporcionado en la solicitud. 
//Si se encontraron perros, se devuelve un estado 200 con un arreglo de perros que coinciden con el nombre buscado
//Sino se encontraron perros, se devuelve un estado 404 con un mensaje que indica que no se encontraron perros con el nombre buscado

        if(dogs.length) {
            res.status(200).send(dogs);
        } else {
            res.status(404).send("No dogs were found with that name");
        }

    } catch (error) { //aqui se manejan los errores que puedan ocurrir durante la ejecución del código
        res.status(404).send(error)
    }
});

module.exports = router;