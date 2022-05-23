const { listBooksService } = require('../../src/services/listBooksService');
const connect = require('../package/connectionDB');

beforeAll(() => {
  (async () => {
    await connect();
  })();
});

const listBooks = [
  {
    title: 'Books',
    author: 'John',
    pages: 123,
    status: 'AVAILABlE',
  },
];
const mockListBooksService = jest.fn(() => listBooks);

describe('Get list book', function () {
  it('should exist a function with the given name', async function () {
    console.log(await listBooksService());

    expect(mockListBooksService).toEqual(listBooks[0]);
  });
});

// describe('Create book', function () {
//   it('should exist a function with the given name', function () {
//     expect(createBook).not.toBeNull();
//   });
// });

// describe('Update book', function () {
//   it('should exist a function with the given name', function () {
//     expect(updateBook).not.toBeNull();
//   });
// });
// describe('Delete book', function () {
//   it('should exist a function with the given name', function () {
//     expect(deleteBook).not.toBeNull();
//   });
// });
