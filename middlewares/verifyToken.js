const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.send("Access Denied");
  try {
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.send("Invalid Token");
  }
};
