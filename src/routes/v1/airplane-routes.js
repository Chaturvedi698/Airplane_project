const express = require('express');
const router = express.Router();
const {AirplaneController } = require('../../controllers');

console.log('in airpllane rounter');
router.post('/',AirplaneController.createAirplane);

module.exports = router