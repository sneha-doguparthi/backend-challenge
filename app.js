const express = require('express');
const vehicleData = require('./src/routes/vehicleRoutes')
const {parseVehicleXmlData} = require('./src/vehicles/parseXml');
const {typeDefs,resolvers} = require('./src/graphql');
const { ApolloServer } = require('apollo-server-express');
const cron = require('node-cron');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

parseVehicleXmlData()

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer(){
  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 

};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});

// scheduled job for every 6 hours
cron.schedule('* */6 * * *', async () => {
  console.log('Scheduled job to Parse XML started.');
  await parseVehicleXmlData();
  console.log('Scheduled job completed.');
});

// REST API
// app.use("/vehicleData", vehicleData)

// app.use("/",(req,res) => {
//   res.send("Send your request to /vehicleData")
// })


