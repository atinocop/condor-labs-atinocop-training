const logger = require('@condor-labs/logger');
const mongo = require('../services/mongoDB/mongoConstansDB');
const mongodb = require('@condor-labs/mongodb')(mongo.Settings);

async function connect() {
  // connect to Mongo
  await mongodb.getClient();
  logger.info(`Se conecto la base de datos:${mongodb._isConnected()}`);
}
module.exports = connect;
