const express = require('express');
const router = express.Router();
const {AirportController } = require('../../controllers');
const {AirportMiddlewares} = require('../../middlewares');
 // /api/v1/airports POST
router.post('/',AirportMiddlewares.validateCreateRequest,AirportController.createAirport);
// /api/v1/airports get
router.get('/',AirportController.getAirports);
// /api/v1/airports/:id get
router.get('/:id',AirportController.getAirport);
// api/v1/airports/:id delete
router.delete('/:id',AirportController.deleteAirport);
// api/v1/airports/:id update
router.patch('/:id',AirportController.updateAirport);  
module.exports = router