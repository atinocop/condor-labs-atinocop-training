const app = require('./app');
const logger = require('@condor-labs/logger');
// const connect = require("../db/connectionMongoDb");

// connect();

const PORT = 4000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
logger.log(`listening on http://${HOST}:${PORT}`);
