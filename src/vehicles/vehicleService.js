const { getVehiclesFromDatabase } = require('../vehicles/vehicleMongo');

const getVehicleData = async (req, res) => {
    console.log("get vehicle data");
    try {
        const allVehicleData = await getVehiclesFromDatabase();
        res.send(allVehicleData);
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    getVehicleData,
}