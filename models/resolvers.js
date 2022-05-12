// const logger = require('@condor-labs/logger');
const { books } = require('../models/exampleBook');
const { v1: uuid } = require('uuid');
const { UserInputError } = require('@graphql-tools/utils');

exports.resolvers = {
  Query: {
    getBooks() {
      return books;
    },
  },

  Mutation: {
    createBook: (root, args) => {
      if (books.find((b) => b.title === args.title)) {
        throw new UserInputError('El nombre debe ser UNICO', { invalidArgs: args.title });
      }
      const book = { ...args, _id: uuid() };
      console.log(book);
      books.push(book);
      return book;
    },
    updateBook: (root, args) => {
      const bookIndex = books.findIndex(
        (b) => b.title === args.title,
        (b) => b.author === args.author,
        (b) => b.pages === args.pages,
        (b) => b.status === args.status
      );
      if (bookIndex === -1) {
        return null;
      }
      const book = books[bookIndex];

      const updateBook = { ...book, title: args.title, author: args.author, pages: args.pages, status: args.status };
      books[bookIndex] = updateBook;

      return updateBook;
    },
  },
};
