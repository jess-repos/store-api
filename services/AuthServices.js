const User = require("../models/User");
const asyncIO = require("../utilities/asyncIO");
const jwt = require("jsonwebtoken");
const Op = require("sequelize").Op;

const login = async (user, password) => {
  const [foundUser, findUserError] = await asyncIO(() =>
    User.findOne({
      where: {
        password: password,
        [Op.or]: [
          { email: { [Op.eq]: user } },
          { username: { [Op.eq]: user } },
        ],
      },
      attributes: ["id", "username", "email"],
    })
  );

  if (findUserError) return { error: findUserError };
  if (!foundUser) return { error: "Invalid email or password" };
  const token = jwt.sign(
    { id: foundUser.id, username: foundUser.username, email: foundUser.email },
    process.env.TOKEN_KEY
  );
  return { token, user: foundUser };
};

module.exports = { login };
