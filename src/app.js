const express = require('express');
const connect = require('./package/connectionDB');
const { schema } = require('./graphql/schema');
const { healthConfig } = require('../src/services/healthConfig');
const { graphqlHTTP } = require('express-graphql');
const { healthMonitor } = require('@condor-labs/health-middleware');
const { settings, keyName } = require('../src/config/constants');

const redis = require('@condor-labs/redis')(settings);

const app = express();

(async () => {
  // get client
  const client = await redis.getClient();
  // prepare and execute batch in redis
  const redisBatch = client.batch();
  await redisBatch.incr(keyName);
  await redisBatch.expire(keyName, 1);
  const resolve = await redisBatch.execAsync();
  // validate response
  console.log(
    resolve && resolve.length > 0 && resolve[0] > 0
      ? `REDIS Client connected OK!!!`
      : `REDIS Client connection failed :(`
  );
  // close app
  process.exit(1);
})();

healthMonitor(app, healthConfig);

(async () => {
  await connect();
})();

app.use(
  '/',
  graphqlHTTP({
    redis,
    graphiql: true,
    schema: schema,
    customFormatErrorFn: (err) => {
      return err.message;
    },
  })
);

module.exports = app;
