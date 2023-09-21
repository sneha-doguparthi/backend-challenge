const axios = require('axios');
const xml2jsParse = require('xml2js').parseString;
const cache = require('./cache');

const parseXMLToJSON = async (xmlData) => {
    return new Promise((resolve, reject) => {
        xml2jsParse(xmlData, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const getVehicleMakes = async () => {
    try {
        const xmlDataResponse = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML'
        );
        const jsonData = await parseXMLToJSON(xmlDataResponse.data);
        return jsonData;
    } catch (error) {
        throw error;
    }
};

const getVehicleTypesForMake = async (makeId) => {
    try {
        const xmlVehicleDataResponse = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=xml`
        );
        const jsonVehicleData = await parseXMLToJSON(xmlVehicleDataResponse.data);
        return jsonVehicleData;
    } catch (error) {
        throw error;
    }
};

const getVehicleData = async () => {
    const cachedVehicleData = cache.get('vehicleData');
    const vehicleMakesJSONData = await getVehicleMakes();
    const allVehicleMakes = vehicleMakesJSONData.Response.Results[0].AllVehicleMakes;

    if (cachedVehicleData) {
        return cachedVehicleData;
      }
    // L48 needs to be changed, I get an error if I fetch the data for all the VehicleMakes
    const slicedVehicleMakes = allVehicleMakes.slice(0,50);
    const makePromises = slicedVehicleMakes.map(async (make) => {
        try{
            const vehicleTypes = await getVehicleTypesForMake(make.Make_ID[0]);
            const VehicleTypesForMakeIds = vehicleTypes.Response.Results[0]?.VehicleTypesForMakeIds;
            const vehicleTypesForMake = VehicleTypesForMakeIds ? VehicleTypesForMakeIds.map((type) => ({
                typeId: type.VehicleTypeId[0],
                typeName: type.VehicleTypeName[0],
            })): [];

            return {
                makeId: make.Make_ID[0],
                makeName: make.Make_Name[0],
                vehicleTypes: vehicleTypesForMake,
            };
    
        }catch(error){
            console.error(`Error parsing the vehice make: ${error} of make number ${make.Make_ID[0]}`);
        }
    });
    const results = await Promise.all(makePromises);

    const vehicleData = results.filter((result) => result !== null);
    cache.set('vehicleData', vehicleData);
    return vehicleData;
}
module.exports = {
    getVehicleMakes,
    getVehicleTypesForMake,
    getVehicleData
};
