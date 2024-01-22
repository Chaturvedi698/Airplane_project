const express = require('express');
const {Infocontroller} = require('../../controllers');

const router = express.Router();
const airplaneroutes = require('./airplane-routes');
const cityroutes = require('./city-routers');
const airportRoutes = require('./airport-routes')
const flightRoutes = require('./flight-routes')

router.use('/airplanes',airplaneroutes);
router.use('/cities',cityroutes);
router.use('/airports',airportRoutes)
router.use('/flights',flightRoutes)

router.get('/info',Infocontroller.info);
module.exports = router;