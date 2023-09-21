const VehicleData = require('./parseXml')
const Datebase = require('../vehicles/mongo')

exports.getVehicleData = async (req, res) => {
    console.log("get vehicle data")
    try {
        const allVehicleData = await VehicleData.getVehicleData();
        res.send(allVehicleData);
    } catch (err) {
        res.json({message: err})
    }
};

exports.saveVehicleData = async (req, res) => {
    console.log("post vehicle data")
    try {
        const allVehicleData = await VehicleData.getVehicleData();
        await Datebase.saveVehicleData(allVehicleData)
        res.send("Vehicle data saved in database");
    } catch (err) {
        res.json({message: err})
    }
}

