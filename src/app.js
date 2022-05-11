const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('../models/schema');

const app = express();

// const schema = {}
app.use(
  '/test',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

module.exports = app;
