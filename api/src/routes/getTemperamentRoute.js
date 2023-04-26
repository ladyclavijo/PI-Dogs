const { Router } = require("express");
const router = Router();
const getTemperaments = require("../controllers/getTemperaments");

router.get("/", async (req, res) => {
    try {
        const infoTemperament = await getTemperaments()

        return res.status(200).send(infoTemperament)
        
    } catch (error) {
        return res.status(404).send("Temperament not found")        
    }
});

module.exports = router;