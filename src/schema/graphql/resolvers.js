const { Book } = require('../graphql/book');
const { errorType } = require('../../middleware/constants');

exports.resolvers = {
  Query: {
    listBooks() {
      return Book.find({});
    },
    async getBookDetails(_, args) {
      const { title } = args;
      const book = await Book.findOne({ title });
      if (!book) {
        throw new Error(JSON.stringify(errorType.ERROR_TITLE_UNKNOWN));
      }
      return book;
    },
  },

  Mutation: {
    createBook: (_, args) => {
      const book = new Book({ ...args });
      book.title = book.title.toLowerCase();
      book.author = book.author.toLowerCase();
      if (book.title === '') {
        throw new Error(JSON.stringify(errorType.ERROR_EMPTY_PARAMETER));
      }
      if (book.author === '') {
        throw new Error(JSON.stringify(errorType.ERROR_EMPTY_PARAMETER));
      }
      if (args.pages < 0) {
        throw new Error(JSON.stringify(errorType.INPUT_ERROR));
      }
      return book.save();
    },

    async updateBook(_, { book, id }) {
      const bookUpdate = await Book.findByIdAndUpdate(id, { $set: book }, { new: true });
      return bookUpdate.save();
    },

    async deleteBook(_, { id }) {
      await Book.findByIdAndDelete(id);
      return `El libro con id:${id} a sido eliminado`;
    },
  },
};
