const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.send({ error: "Access Denied" });
  try {
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    if (!user.is_seller) return res.send({ error: "Not a Seller" });
    req.user = user;
    next();
  } catch (error) {
    return res.send({ error: "Invalid Token" });
  }
};
