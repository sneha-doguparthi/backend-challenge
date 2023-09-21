const axios = require('axios');
const { getVehicleMakes } = require('../../src/vehicles/parseXml');

const mockXMLData =
    `<?xml version="1.0" encoding="UTF-8"?>
<AllVehicleMakes>
<Make_ID>4877</Make_ID>
<Make_Name>1/OFF KUSTOMS, LLC</Make_Name>
</AllVehicleMakes></xml>`

const mockJSONData = {
    "AllVehicleMakes": {
        "Make_ID": ["4877"],
        "Make_Name": ["1/OFF KUSTOMS, LLC"]
    }
}

const parseXMLToJSON = jest.fn()
const mockAxios = axios
jest.mock('axios')

describe("Parse Xml", () => {
    test("Get the vehicle makes by pasing XML to JSON", async () => {
        mockAxios.get.mockResolvedValue({ data: mockXMLData });
        parseXMLToJSON.mockResolvedValue(mockJSONData); 
        const result = await getVehicleMakes();
        expect(result).toEqual(mockJSONData);
        expect(mockAxios.get).toHaveBeenCalled();
    })
})
