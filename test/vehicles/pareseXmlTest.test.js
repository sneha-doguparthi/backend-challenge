const axios = require('axios');
const { getVehicleMakes, getVehicleTypesForMake } = require('../../src/vehicles/parseXml');
const { mockXMLVehicleMakeData,mockJSONVehicleMakeData, mockXMLVehicleTypeData, mockJSONVehiclyTypeData} = require('./mock');

const parseXMLToJSON = jest.fn()
const mockAxios = axios
jest.mock('axios')

describe("Parse Xml", () => {
    test("Get the Vehicle makes in XML and parse XML to JSON", async () => {
        mockAxios.get.mockResolvedValue({ data: mockXMLVehicleMakeData });
        parseXMLToJSON.mockResolvedValue(mockJSONVehicleMakeData); 
        const result = await getVehicleMakes();
        expect(result).toEqual(mockJSONVehicleMakeData);
        expect(mockAxios.get).toHaveBeenCalled();
    });
    test("Get the vehicle type for each make in XML and parse it to JSON", async () => {
        mockAxios.get.mockResolvedValue({ data: mockXMLVehicleTypeData });
        parseXMLToJSON.mockResolvedValue(mockJSONVehiclyTypeData); 
        const result = await getVehicleTypesForMake();
        expect(result).toEqual(mockJSONVehiclyTypeData);
        expect(mockAxios.get).toHaveBeenCalled();
    })


})
