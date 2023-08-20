const express = require('express');
const router = express.Router();
const {AirplaneController } = require('../../controllers');
const {AirplaneVAlidations} = require('../../middlewares');
 // /api/v1/airplanes POST
router.post('/',AirplaneVAlidations.validateCreateRequest,AirplaneController.createAirplane);
// /api/v1/airplanes get
router.get('/',AirplaneController.getAirplanes);
module.exports = router