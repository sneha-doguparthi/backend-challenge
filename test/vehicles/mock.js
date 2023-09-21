const mockXMLVehicleMakeData =
    `<?xml version="1.0" encoding="UTF-8"?>
<AllVehicleMakes>
<Make_ID>4877</Make_ID>
<Make_Name>1/OFF KUSTOMS, LLC</Make_Name>
</AllVehicleMakes></xml>`

const mockJSONVehicleMakeData = {
    "AllVehicleMakes": {
        "Make_ID": ["4877"],
        "Make_Name": ["1/OFF KUSTOMS, LLC"]
    }
}

const mockXMLVehicleTypeData = `<?xml version="1.0" encoding="UTF-8"?>
<VehicleTypesForMakeIds>
<VehicleTypeId>6</VehicleTypeId>
<VehicleTypeName>Trailer</VehicleTypeName>
</VehicleTypesForMakeIds></xml>`

const mockJSONVehiclyTypeData = {
    "VehicleTypesForMakeIds": {
        "VehicleTypeId": ["6"],
        "VehicleTypeName": ["Trailer"]
    }
}

module.exports = {
    mockXMLVehicleMakeData,mockJSONVehicleMakeData, mockXMLVehicleTypeData, mockJSONVehiclyTypeData
}