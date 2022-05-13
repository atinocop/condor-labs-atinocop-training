const { makeExecutableSchema } = require('@graphql-tools/schema');
const { resolvers } = require('./resolvers');

const typeDefs = `

  enum STATUS {
    LENT
    AVAILABlE
    UNAVAILABLE}

  type Query {
    listBooks: [Book]!
    getBookDetails(title: String!): Book}

  type Book {
    _id: ID
    title: String!
    author: String!
    pages: Int!
    status: STATUS!}

 input bookInput{ title: String author: String pages: Int status: STATUS! }

  type Mutation {
    createBook(
    title: String!
    author: String!
    pages: Int!
    status: STATUS!
    ): Book

    updateBook( id: ID!, book: bookInput! ): Book
    deleteBook(id: ID): String!}

`;
exports.schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
