const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');
// const { typeDefs } = require('./typeDefs')

const typeDefs = /* GraphQL */ `
  type book {
    id: ID!
    title: String!
    author: String!
    pages: Int!
  }

  type Query {
    bookCount: Int!
    allbooks: [book]
  }
`;
exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
