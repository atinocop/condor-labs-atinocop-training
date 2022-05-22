const { listBooks, createBook, updateBook, deleteBook } = require('../../src/schema/graphql/resolvers');

describe('Get list book', function () {
  it('should exist a function with the given name', function () {
    expect(listBooks).not.toBeNull();
  });
});

describe('Create book', function () {
  it('should exist a function with the given name', function () {
    expect(createBook).not.toBeNull();
  });
});

describe('Update book', function () {
  it('should exist a function with the given name', function () {
    expect(updateBook).not.toBeNull();
  });
});
describe('Delete book', function () {
  it('should exist a function with the given name', function () {
    expect(deleteBook).not.toBeNull();
  });
});
