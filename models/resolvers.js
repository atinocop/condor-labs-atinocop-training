const books = [
  {
    id: '1231241244',
    title: 'arnasbdj',
    author: 'asdasd',
    pages: 123,
  },
  {
    id: '1124124=4',
    title: 'dddd',
    author: 'asdffasd',
    pages: 1243,
  },
  {
    id: '1124344',
    title: 'aaaa',
    author: 'dddd',
    pages: 12443,
  },
];

const resolvers = {
  Query: {
    bookCount: () => books.length,
  },
};

module.exports = resolvers;
