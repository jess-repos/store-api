const User = require("../models/User");
const asyncIO = require("../utilities/asyncIO");

const createUser = async (user) => {
  const [createdUser, createUserError] = await asyncIO(() => User.create(user));
  if (createUserError) return createUserError;

  createdUser.password = undefined;
  return createdUser;
};

const updateUser = async (id, updatedUserValues) => {
  const [existingUser, findExistingUserError] = await asyncIO(() =>
    User.findOne({ where: { id: id } })
  );

  if (findExistingUserError) return findExistingUserError;
  if (!existingUser) return "User does not exist";

  existingUser.username = updatedUserValues.username;
  existingUser.email = updatedUserValues.email;
  existingUser.password = updatedUserValues.password;

  const [updatedUser, updateUserError] = await asyncIO(() =>
    existingUser.save()
  );
  
  if (updateUserError) return updateUserError;

  updatedUser.password = undefined;
  return updatedUser;
};

module.exports = {
  createUser,
  updateUser,
};
