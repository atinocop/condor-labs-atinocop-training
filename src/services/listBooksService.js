const { Book } = require('../schema/book');

const listBooksService = () => {
  return Book.find();
};

module.exports = { listBooksService };
