const db = require("../db/queries");

async function getAllInventoryItems(req, res) {
  let mainPageRenderView;
  const { select_view } = req.query;

  if (select_view === "allItems" || select_view === undefined) {
    mainPageRenderView = await db.SQLgetPopulateAllProducts();
    res.render("index", { mainPageRenderView: mainPageRenderView });
  } else if (select_view === "watch") {
    mainPageRenderView = await db.SQLGetProductByCategory("Watch");
    res.render("index", { mainPageRenderView: mainPageRenderView });
  } else if (select_view === "phone") {
    mainPageRenderView = await db.SQLGetProductByCategory("Phone");
    res.render("index", { mainPageRenderView: mainPageRenderView });
  } else {
    mainPageRenderView = await db.SQLgetPopulateAllProducts();
    res.render("index", { mainPageRenderView: mainPageRenderView });
  }
}

async function getItemById(req, res) {
  const viewItem = req.params;

  const getProductById = await db.SQLgetProductById(viewItem.viewItem);

  res.render("viewItem", { getProductById: getProductById });
}

async function adminDashboard(req, res) {
  const mainPageRenderView = await db.SQLgetPopulateAllProducts();

  res.render("storeAdminDashboard", { mainPageRenderView: mainPageRenderView });
}

async function addProductPage(req, res) {
  res.render("addProduct");
}

async function addProductToDb(req,res)
{
  console.log("Add product to DB");

}

async function editProduct(req, res) {
  const itemId = req.params;

  const getProductById = await db.SQLgetProductById(itemId.itemId);

  res.render("editProduct", { getProductById: getProductById });
}

async function deleteProduct(req, res) {
  const itemId = req.params;

  const getProductById = await db.SQLdeleteById(itemId.itemId);

  res.render("deleteProduct", { getProductById: getProductById });
}

module.exports = {
  getAllInventoryItems,
  adminDashboard,
  getItemById,
  addProductPage,
  editProduct,
  deleteProduct,
  addProductToDb
};
