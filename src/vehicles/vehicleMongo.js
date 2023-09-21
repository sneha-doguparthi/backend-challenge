const { getConnection } = require('../database');

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
  saveVehicleData
};