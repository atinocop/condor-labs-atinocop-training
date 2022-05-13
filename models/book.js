const mongodb = require('@condor-labs/mongodb')();

const schema = new mongodb.mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Book = mongodb.mongoose.model('Book', schema);

module.exports = { Book };
