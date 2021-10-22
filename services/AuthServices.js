const User = require("../models/User");
const asyncIO = require("../utilities/asyncIO");
const jwt = require("jsonwebtoken");

const login = async (email, password) => {
  const [foundUser, findUserError] = await asyncIO(() =>
    User.findOne({
      where: { email: email, password: password },
      attributes: ["id", "username", "email"],
    })
  );

  if (findUserError) return findUserError;
  if (!foundUser) return "Invalid email or password";
  const token = jwt.sign(
    { id: foundUser.id, username: foundUser.username, email: foundUser.email },
    process.env.TOKEN_KEY
  );
  return { token };
};

module.exports = { login };
