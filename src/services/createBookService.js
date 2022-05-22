const { errorType } = require('../constants/errorConstants');
const { Book } = require('../schema/book');

const createBookService = (args) => {
  const book = new Book({ ...args });
  book.title = book.title.toLowerCase();
  book.author = book.author.toLowerCase();
  if (book.title === '' || book.author === '') {
    throw new Error(JSON.stringify(errorType.ERROR_EMPTY_PARAMETER));
  }
  if (args.pages < 0) {
    throw new Error(JSON.stringify(errorType.INPUT_ERROR));
  }
  return book.save();
};

module.exports = { createBookService };
