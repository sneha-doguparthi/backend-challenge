
const express = require('express');
const router = express.Router();
const VehicleService = require('../vehicles/service')

router.get('/', VehicleService.getVehicleData);

router.post('/', VehicleService.saveVehicleData)

module.exports = router;
