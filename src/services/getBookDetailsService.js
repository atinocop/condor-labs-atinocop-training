const { errorType } = require('../constants/errorConstants');
const { Book } = require('../schema/book');

const getBookDetailsService = async (args) => {
  const { title } = args;
  const book = await Book.findOne({ title });
  if (!book) {
    throw new Error(JSON.stringify(errorType.ERROR_TITLE_UNKNOWN));
  }
  return book;
};

module.exports = { getBookDetailsService };
