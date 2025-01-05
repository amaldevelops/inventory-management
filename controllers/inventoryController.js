const db = require("../db/queries");

async function getAllInventoryItems(req, res) {
  let mainPageRenderView;
  const { select_view } = req.query;
  // console.log(select_view);

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

  // console.log(getProductById);

  res.render("viewItem", { getProductById: getProductById });
}

async function adminDashboard(req, res) {
  // const getProductById = await db.SQLgetProductById(1);
  // res.render("storeAdminDashboard", { getProductById: getProductById });

  const mainPageRenderView = await db.SQLgetPopulateAllProducts();

  // console.log(mainPageRenderView);
  res.render("storeAdminDashboard", { mainPageRenderView: mainPageRenderView });
}

async function addProduct(req, res) {
  console.log("Render Add product route")
  res.render("addProduct");
}

async function editProduct(req, res) {
  // console.log("Render Edit product route")

  const itemId = req.params;

  const getProductById = await db.SQLgetProductById(itemId.itemId);

  // const getProductById=await db.SQLgetProductById(1);

  res.render("editProduct",{getProductById:getProductById});
}

async function deleteProduct(req, res) {
  res.render("addProduct");
}

module.exports = {
  getAllInventoryItems,
  adminDashboard,
  getItemById,
  addProduct,
  editProduct,
  deleteProduct,
};
