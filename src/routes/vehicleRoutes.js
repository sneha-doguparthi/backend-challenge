
const express = require('express');
const router = express.Router();
const {getVehicleData,saveVehicleData} = require('../vehicles/vehicleService')

router.get('/', getVehicleData);

router.post('/', saveVehicleData)

module.exports = router;
