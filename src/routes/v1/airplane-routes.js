const express = require('express');
const router = express.Router();
const {AirplaneController } = require('../../controllers');
const {AirplaneVAlidations} = require('../../middlewares');
router.post('/',AirplaneVAlidations.validateCreateRequest,AirplaneController.createAirplane);

module.exports = router