const logger = require('@condor-labs/logger');
const mongo = require('./constants');
const mongodb = require('@condor-labs/mongodb')(mongo.Settings);

async function connect() {
  // connect to Mongo
  await mongodb.getClient();
  logger.info(`Se conecto la base de datos:${mongodb._isConnected()}`);
}
module.exports = connect;

// const MONGODB_URI = MONGODB_URI;

// mongoose.connect(MONGODB_URI, {
//   userNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// }).then(() => {
//     logger.info('Conectado a MongoDB')
// }).catch(err => {
//     logger.info('Error conectando base de datos mongoDB', err.message)
// })
