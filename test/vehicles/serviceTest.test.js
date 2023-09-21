const VehicleData = require('../../src/vehicles/parseXml');
const VehicleService = require('../../src/vehicles/vehicleService')
jest.mock('../../src/vehicles/parseXml');
const mockData = {
  "makeId":"11253",
  "makeName":"3 STAR MFG LTD",
  "vehicleTypes":[{"typeId":"6","typeName":"Trailer"}]}
  
  const mockReq = {}
  
  const mockRes = {
    send: jest.fn(),
    json: jest.fn()
  }
describe('Vehicle data', () => {
  test('get all the vehicle data', async () => {
    VehicleData.getVehicleData.mockResolvedValue([mockData]);

    await VehicleService.getVehicleData(mockReq, mockRes);

    expect(mockRes.send).toHaveBeenCalledWith([mockData]);
  }); 
})