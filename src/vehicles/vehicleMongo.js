const { getConnection } = require('../database');

const getVehiclesFromDatabase = async () => {
  try {
    const db = await getConnection();
    const collection = db.collection('vehicles');
    const result = await collection.find({}, { _id: 0 }).toArray();
    return result;
  } catch (error) {
    throw error;
  }
};
const saveVehicleData = async (vehicleData) => {
  try {
    const db = await getConnection();
    const collection = db.collection('vehicles');
    await collection.insertMany(vehicleData);
    console.log('Vehicle Data saved to the database.');
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveVehicleData,
  getVehiclesFromDatabase
};
