const express = require('express');
const {Infocontroller} = require('../../controllers');

const router = express.Router();
const airplaneroutes = require('./airplane-routes');

console.log('in router');
router.use('/airplanes',airplaneroutes);
router.get('/info',Infocontroller.info);

module.exports = router;