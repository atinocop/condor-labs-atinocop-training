const logger = require('@condor-labs/logger');
const mongo = require('./mongoDB/mongoConstansDB');
const mongodb = require('@condor-labs/mongodb')(mongo.Settings);

async function connect() {
  // connect to Mongo
  await mongodb.getClient();
  logger.info(`Connect to Mongo:${mongodb._isConnected()}`);
}
module.exports = connect;
