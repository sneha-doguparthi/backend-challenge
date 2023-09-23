const { getVehiclesFromDatabase } = require('./vehicles/vehicleMongo');
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type VehicleType {
    typeId: String
    typeName: String
  }

  type Make {
    _id: String
    makeId: String
    makeName: String
    vehicleTypes: [VehicleType]
  }

  type Query {
    getAllData: [Make]
  }
`;

const resolvers = {
  Query: {
    getAllData: async () => {
      try {
        const makes = await getVehiclesFromDatabase();
        return makes;
      } catch (error) {
        console.error('Error fetching all makes:', error);
        throw error;
      }
    },
  },
};

module.exports ={
    typeDefs,resolvers
};
