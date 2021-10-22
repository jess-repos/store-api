const router = require("express").Router();
const UserServices = require("../services/UserServices");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", async (req, res) => {
  const user = req.body;
  const response = await UserServices.createUser(user);
  res.send(response);
});
router.put("/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const updatedUserValues = req.body;
  const response = await UserServices.updateUser(id, updatedUserValues);
  res.send(response);
});

module.exports = router;
