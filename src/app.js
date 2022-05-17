const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./schema/graphql/schema');
const connect = require('../src/config/connectionDB');

(async () => {
  await connect();
})();

const app = express();

app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

module.exports = app;
