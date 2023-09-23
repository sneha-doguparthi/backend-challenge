
const express = require('express');
const router = express.Router();
const {getVehicleData} = require('../vehicles/vehicleService')

router.get('/', getVehicleData);

module.exports = router;
