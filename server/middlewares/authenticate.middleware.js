const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const token = req.cookies["token"];
  jwt.verify(token, process.env.SALT, (err, data) => {
    if (err) {
      res.status(401).send("Not authorized!");
    } else {
      req.userId = data._id;
      next();
    }
  });
}
module.exports = authenticate;
