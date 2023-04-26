const { Router } = require("express");
const router = Router();
const getAllDogs = require("../controllers/getAllDogs");

router.get("/:id", async(req, res) => {
    const { id } = req.params;
    const allDogs = await getAllDogs();

    try {
        if(id) {
            const dogId = await allDogs.find((e) => e.id == (id));
            dogId ? res.status(200).send(dogId) : res.status(404).send("Dog Not Found");
        }

    } catch (error) {
        res.status(404).send(error)
    }
});

module.exports = router;