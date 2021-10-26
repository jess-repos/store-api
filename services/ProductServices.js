const Product = require("../models/Product");
const asyncIO = require("../utilities/asyncIO");

const getProducts = async () => {
  const [products, getProductsError] = await asyncIO(() => Product.findAll());
  if (getProductsError) return { error: getProductsError };

  return products;
};
const getProductsBySeller = async (id) => {
  const [products, getProductsError] = await asyncIO(() =>
    Product.findAll({ where: { seller_id: id } })
  );
  if (getProductsError) return { error: getProductsError };
  return products;
};

const createProduct = async (user_id, product) => {
  const [createdProduct, createProductError] = await asyncIO(() =>
    Product.create({ ...product, seller_id: user_id })
  );
  if (createProductError) return { error: createProductError };

  return createdProduct;
};

const updateProduct = async (user_id, id, updatedProductValues) => {
  const [existingProduct, findExistingProductError] = await asyncIO(() =>
    Product.findOne({ where: { id: id } })
  );

  if (findExistingProductError) return { error: findExistingProductError };
  if (!existingProduct) return { error: "Product does not exist" };
  if (user_id !== existingProduct.seller_id) {
    return { error: "You do not own this product" };
  }
  const { name, description, price, quantity } = updatedProductValues;
  if (name) existingProduct.name = name;
  if (description) existingProduct.description = description;
  if (price) existingProduct.price = price;
  if (quantity) existingProduct.quantity = quantity;

  const [updatedProduct, updateProductError] = await asyncIO(() =>
    existingProduct.save()
  );

  if (updateProductError) return { error: updateProductError };

  return updatedProduct;
};

const deleteProduct = async (user_id, id) => {
  const [existingProduct, findExistingProductError] = await asyncIO(() =>
    Product.findOne({ where: { id: id } })
  );
  if (findExistingProductError) return { error: findExistingProductError };
  if (!existingProduct) return { error: "Product does not exist" };

  if (user_id !== existingProduct.seller_id) {
    return { error: "You do not own this product" };
  }

  console.log("HERE");
  const [deletedProduct, deleteProductError] = await asyncIO(() =>
    existingProduct.destroy()
  );
  if (deleteProductError) return { error: deleteProductError };

  return { deletedProduct };
};

module.exports = {
  getProducts,
  getProductsBySeller,
  createProduct,
  updateProduct,
  deleteProduct,
};
