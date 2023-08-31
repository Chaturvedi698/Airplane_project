const express = require('express');
const router = express.Router();
const {CityController } = require('../../controllers');
const {CityValidations} = require('../../middlewares');
 // /api/v1/cities POST
router.post('/',
CityValidations.validateCreateRequest,
CityController.createCity);

// api/v1/cities/:id delete
router.delete('/:id',
CityController.deleteCity);
// api/v1/cities/:id update
router.patch('/:id',
CityController.updateCity);  
 
module.exports = router 