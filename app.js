const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const vehicleData = require('./src/routes/vehicleRoutes')

app.use("/vehicleData", vehicleData)

app.use("/",(req,res) => {
  res.send("Send your request to /vehicleData")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
