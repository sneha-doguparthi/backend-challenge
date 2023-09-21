const VehicleData = require('./parseXml');
const Datebase = require('./vehicleMongo');

const getVehicleData = async (req, res) => {
    console.log("get vehicle data");
    try {
        const allVehicleData = await VehicleData.getVehicleData();
        res.send(allVehicleData);
    } catch (err) {
        res.json({message: err});
    }
};

const saveVehicleData = async (req, res) => {
    console.log("post vehicle data")
    try {
        const allVehicleData = await VehicleData.getVehicleData();
        await Datebase.saveVehicleData(allVehicleData);
        res.send("Vehicle data saved in database");
    } catch (err) {
        res.json({errorMessage: err});
    }
}

module.exports = {
    getVehicleData, 
    saveVehicleData
}