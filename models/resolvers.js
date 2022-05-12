// const logger = require('@condor-labs/logger');
const { book } = require('../models/exampleBook');
const { v1: uuid } = require('uuid');
// const { UserInputError } = require('graphql');

exports.resolvers = {
  Query: {
    getBooks() {
      return book;
    },
    listBooks: (root, args) => {
      const { title } = args;
      return book.find((book) => book.title === title);
    },
  },

  Mutation: {
    createBook: (root, args) => {
      const book = { ...args, _id: uuid() };
      console.log(book);
      book.push(book);
      return book;
    },
  },
};
