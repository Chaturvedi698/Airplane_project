const express = require('express');
const {Infocontroller} = require('../../controllers');

const router = express.Router();
const airplaneroutes = require('./airplane-routes');
const cityroutes = require('./city-routers');

router.use('/airplanes',airplaneroutes);
router.use('/cities',cityroutes);
router.get('/info',Infocontroller.info);

module.exports = router;