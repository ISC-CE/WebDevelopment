const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../../../data");

const authenticateToken = (req, res, next) => {
  const bearerToken = req.header("Authorization");
  if (!bearerToken) {
    return res.json({ message: "Invalid Token" }).status(401);
  }
  const token = bearerToken.split(" ")[1] ?? "";
  jwt.verify(token, jwtSecretKey, (err, user) => {
    if (err) {
      return res.json({ message: "Unauthorized" }).status(403);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
