const { Router } = require("express");
const router = Router();
const getDogsByIdApi = require("../controllers/getDogsByIdApi");
const getDogsByIdDb = require("../controllers/getDogsByIdDb");

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        if(!id) return res.status(404).send("error")
    //pregunto si el id posee un - ya que los ids creados con uudi4 los poseen y los de la API no

        if (id.includes("-")) {

            const dogsIdByDb = await getDogsByIdDb(id);
            if (!dogsIdByDb) { 
                res.status(404).send("Dog Not Found")
            } else {
                res.status(200).send(dogsIdByDb)
            }

        } else {
            const dogsIdByApi = await getDogsByIdApi(id);
            res.status(200).send(dogsIdByApi)
          }
        } catch (error) {
            res.status(400).send(error)
        }
});

module.exports = router;