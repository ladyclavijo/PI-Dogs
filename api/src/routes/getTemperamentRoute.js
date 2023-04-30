const { Router } = require("express");
const router = Router();
const getTemperaments = require("../controllers/getTemperaments");

router.get("/", async (req, res) => {
    try {
        const infoTemperament = await getTemperaments();

        console.log(infoTemperament.length + "cantidad temps")

        return res.status(200).send(infoTemperament)
        
    } catch (error) {
        return res.status(404).send("Temperament not found")        
    }
});

module.exports = router;