const { listBooksService } = require('../services/listBooksService');
const { getBookDetailsService } = require('../services/getBookDetailsService');
const { createBookService } = require('../services/createBookService');
const { updateBookService } = require('../services/updateBookService');
const { deleteBookService } = require('../services/deleteBookServices');

exports.resolvers = {
  Query: {
    listBooks() {
      return listBooksService();
    },
    async getBookDetails(_, args) {
      return await getBookDetailsService(args);
    },
  },
  Mutation: {
    createBook: (_, args) => {
      return createBookService(args);
    },

    async updateBook(_, { book, id }) {
      return updateBookService(book, id);
    },

    async deleteBook(_, { id }) {
      return deleteBookService(id);
    },
  },
};
