const router = require("express").Router();
const verifySellerToken = require("../middlewares/verifySellerToken");
const ProductServices = require("../services/ProductServices");

router.get("/", async (req, res) => {
  const response = await ProductServices.getProducts();
  res.send(response);
});
router.get("/seller", verifySellerToken, async (req, res) => {
  const { id } = req.user;
  const response = await ProductServices.getProductsBySeller(id);
  res.send(response);
});

router.post("/", verifySellerToken, async (req, res) => {
  const product = req.body;
  const user_id = req.user.id;
  const response = await ProductServices.createProduct(user_id, product);

  res.send(response);
});
router.put("/:id", verifySellerToken, async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.id;
  const updatedProductValues = req.body;
  const response = await ProductServices.updateProduct(
    user_id,
    id,
    updatedProductValues
  );

  res.send(response);
});

router.delete("/:id", verifySellerToken, async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.id;
  const response = await ProductServices.deleteProduct(user_id, id);

  res.send(response);
});

module.exports = router;
