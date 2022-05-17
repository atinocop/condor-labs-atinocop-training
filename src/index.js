const app = require('./app');
const logger = require('@condor-labs/logger');

const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST);
logger.log(`listening on http://${HOST}:${PORT}`);
