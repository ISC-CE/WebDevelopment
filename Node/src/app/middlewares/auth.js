const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const bearerToken = req.header("Authorization");
  if (!bearerToken) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  const token = bearerToken.split(" ")[1] ?? "";
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
