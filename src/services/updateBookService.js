const { Book } = require('../schema/book');

const updateBookService = async (book, id) => {
  const bookUpdate = await Book.findByIdAndUpdate(id, { $set: book }, { new: true });
  return bookUpdate.save();
};

module.exports = { updateBookService };
