const { MongoClient } = require('mongodb');
const uri = require('./config/keys')

const mongouri = uri.mongoUri

const client = new MongoClient(mongouri);

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db();
  } catch (error) {
    console.log(error)
    throw error;
  }
}

module.exports = { connectToDatabase };
