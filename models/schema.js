const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');
// const { typeDefs } = require('./typeDefs')

const typeDefs = `

  enum STATUS {
    LENT
    AVAILABlE
    UNAVAILABLE
  }

  type Query {
    getBooks: [book]!
    listBooks(title: String!): book
  }

  type book {
    _id: ID
    title: String!
    author: String!
    pages: Int!
    status: STATUS!
  }

  type Mutation {
    createBook(
    title: String!
    author: String!
    pages: Int!
    status: STATUS!
    ): book

    updateBook(
      title: String!
      author: String!
      pages: Int!
      status: STATUS!
      ): book
  }

`;
exports.schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
