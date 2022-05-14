const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { healthMonitor } = require('@condor-labs/health-middleware');
const { schema } = require('../models/schema');

const app = express();

healthMonitor(app);

app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

module.exports = app;
