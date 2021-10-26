const router = require("express").Router();
const AuthServices = require("../services/AuthServices");

router.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const response = await AuthServices.login(user, password);
  if (response.error) return res.send(response);
  res.header("token", response.token).send(response.user);
});

module.exports = router;
