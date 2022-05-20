const express = require('express');
const connect = require('./package/connectionDB');
const { schema } = require('./schema/graphql/schema');
const { healthConfig } = require('../src/services/healthConfig');
const { graphqlHTTP } = require('express-graphql');
const { healthMonitor } = require('@condor-labs/health-middleware');
const redis = require('@condor-labs/redis');

const app = express();

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
