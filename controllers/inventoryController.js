const db = require("../db/queries");

async function getAllInventoryItems(req, res) {
  const allProducts= await db.getPopulateAllProducts();
  console.log(allProducts);
  res.render("index", {allProducts:allProducts});
}

async function adminDashboard(req, res) {
 
  res.render("storeAdminDashboard");
}


module.exports = {
  getAllInventoryItems,
  adminDashboard,
};
