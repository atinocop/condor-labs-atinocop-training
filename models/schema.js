const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');
// const { typeDefs } = require('./typeDefs')

const typeDefs = `
  type Query {
    getBooks: [book]!
    listBooks(title: String!): book
  }

  type book {
    _id: ID
    title: String!
    author: String!
    pages: Int!
  }

  type Mutation {
    createBook(
    title: String!
    author: String!
    pages: Int!): book
  }

`;
exports.schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
