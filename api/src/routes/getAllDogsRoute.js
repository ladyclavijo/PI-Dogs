const { Router } = require("express");
const router = Router();
const getAllDogs = require("../controllers/getAllDogs");

router.get("/", async (req, res) => {
    const name = req.query.name;
    const allDogs = await getAllDogs();
    try {
        if(name) {
            const dogName = await allDogs.filter((e) => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
            dogName.length ? res.status(200).send(dogName) : res.status(404).send("Dog Not Found");
        }
        return res.status(200).send(allDogs);

    } catch (error) {
        res.status(404).send(error);        
    }
});

module.exports = router;