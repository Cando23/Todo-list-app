const internalServerError = (error, req, res, next) => {
  res.status(500);
  res.send("500 Internal Server Error");
};
const notFoundError = (req, res, next) => {
  res.status(404);
  res.send("404 Not Found");
};
module.exports = {
  internalServerError,
  notFoundError,
};
