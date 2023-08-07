const express = require('express');
const {Infocontroller} = require('../../controllers');

const router = express.Router();
const airplaneroutes = require('./airplane-routes');

router.use('/airplanes',airplaneroutes);
router.get('/info',Infocontroller.info);

module.exports = router;