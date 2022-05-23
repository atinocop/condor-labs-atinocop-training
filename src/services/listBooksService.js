const { Book } = require('../schema/book');

const listBooksService = async () => {
  const books = await Book.find();
  return books;
};

module.exports = { listBooksService };
