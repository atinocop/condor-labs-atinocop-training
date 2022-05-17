const { Book } = require('../graphql/book');

exports.resolvers = {
  Query: {
    listBooks() {
      return Book.find({});
    },
    getBookDetails(_, args) {
      const { title } = args;
      return Book.findOne({ title });
    },
  },

  Mutation: {
    createBook: (_, args) => {
      const book = new Book({ ...args });
      if (args.pages > 0) {
        args.pages = true;
      } else {
        throw new Error(`the pages value must be greater than 0`);
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
