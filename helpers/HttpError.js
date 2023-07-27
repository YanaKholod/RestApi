// const HttpError = (status, message) => {
//   const error = new Error(message);
//   error.status = status;
//   return error;
// };

// module.exports = HttpError;

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = HttpError;
