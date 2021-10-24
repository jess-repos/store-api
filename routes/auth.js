const router = require("express").Router();
const AuthServices = require("../services/AuthServices");

router.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const response = await AuthServices.login(user, password);

  res.send(response);
});

module.exports = router;
