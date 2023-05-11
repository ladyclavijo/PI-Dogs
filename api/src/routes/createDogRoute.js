const { Router } = require("express");
const router = Router();
const createDog = require("../controllers/createDog");

router.post("/", async(req, res) => {
    try {
        const {name, temperaments, life_span, height, weight, image} = req.body;
        
        if(!name || !temperaments || !life_span || !height || !weight || !image ) {
            return res.status(404).send("Missing Data")
        }
        const newDog = await createDog(name, temperaments, life_span, height, weight, image)
          return res.status(200).send(`The Dog ${name} was created succesfully!`)
        
    } catch (error) {
        return res.status(404).send({msg: error})
    }
});

module.exports = router;