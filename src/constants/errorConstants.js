exports.errorName = {
  TITLE_ALREADY_EXISTS: 'TITLE_ALREADY_EXISTS',
  SERVER_ERROR: 'SERVER_ERROR',
};

exports.errorType = {
  TITLE_ALREADY_EXISTS: {
    message: 'Title is already exists.',
    status: 403,
  },
  SERVER_ERROR: {
    message: 'Server error.',
    status: 500,
  },
  ERROR_TITLE_UNKNOWN: {
    message: 'Title not found.',
    status: 404,
  },
  INPUT_ERROR: {
    message: 'Pages must be grater than 0 ',
    status: 400,
  },
  ERROR_EMPTY_PARAMETER: {
    message: 'Must be contain at least one parameter',
    status: 400,
  },
};
