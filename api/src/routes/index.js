const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const createDogMiddleware = require("../routes/createDogRoute");
const getDogsByIdMiddleware = require("../routes/getAllDogsByIdRoute");
const getDogsByNameMiddleware = require("../routes/getAllDogsByNameRoute");
const getTemperamentMiddleware = require("../routes/getTemperamentRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", createDogMiddleware, getDogsByIdMiddleware, getDogsByNameMiddleware);
router.use("/temperaments", getTemperamentMiddleware);


module.exports = router;