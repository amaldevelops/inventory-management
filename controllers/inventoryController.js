const db = require("../db/queries");

async function getAllInventoryItems(req, res) {
  const allProducts = await db.getPopulateAllProducts();
  console.log(allProducts);
  res.render("index", { allProducts: allProducts });
}

async function adminDashboard(req, res) {
  const getProductById=await db.getProductById(1);

  console.log(getProductById)

  res.render("storeAdminDashboard",{getProductById:getProductById});
}

module.exports = {
  getAllInventoryItems,
  adminDashboard,
};
