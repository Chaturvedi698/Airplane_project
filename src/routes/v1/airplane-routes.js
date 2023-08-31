const express = require('express');
const router = express.Router();
const {AirplaneController } = require('../../controllers');
const {AirplaneVAlidations} = require('../../middlewares');
 // /api/v1/airplanes POST
router.post('/',AirplaneVAlidations.validateCreateRequest,AirplaneController.createAirplane);
// /api/v1/airplanes get
router.get('/',AirplaneController.getAirplanes);
// /api/v1/airplanes/:id get
router.get('/:id',AirplaneController.getAirplane);
// api/v1/airplanes/:id delete
router.delete('/:id',AirplaneController.deleteAirplane);
// api/v1/airplanes/:id update
router.patch('/:id',AirplaneController.updateAirplane);  
module.exports = router