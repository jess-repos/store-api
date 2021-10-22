const router = require("express").Router();
const AuthServices = require("../services/AuthServices");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await AuthServices.login(email, password);

  res.send(response);
});

module.exports = router;
