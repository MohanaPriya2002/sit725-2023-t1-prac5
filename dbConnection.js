const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Lakshmimohana:Lakshmi2002@sit725.aaheaqt.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;