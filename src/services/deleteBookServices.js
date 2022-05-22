const { Book } = require('../schema/book');

const deleteBookService = async (id) => {
  await Book.findByIdAndDelete(id);
  return `The Book with id:${id} has been delete `;
};

module.exports = { deleteBookService };
