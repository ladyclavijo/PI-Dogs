const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const createDogMiddleware = require("../routes/createDogRoute");
const getAllDogsMiddleware = require("../routes/getAllDogsRoute");
const getDogsByIdMiddleware = require("../routes/getDogsById");
const getDogsByNameMiddleware = require("../routes/getDogsByName");
const getTemperamentMiddleware = require("../routes/getTemperamentRoute");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", createDogMiddleware, getAllDogsMiddleware, getDogsByIdMiddleware, getDogsByNameMiddleware);
router.use("/temperaments", getTemperamentMiddleware);


module.exports = router;