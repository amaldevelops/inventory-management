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
  const adminPW = req.body.adminPW;

  if (adminPW == "Casio") {
    console.log(adminPW);
    const mainPageRenderView = await db.SQLgetPopulateAllProducts();

    res.render("storeAdminDashboard", {
      mainPageRenderView: mainPageRenderView,
    });
  } else {
    console.log("Incorrect Password");
    res.render("incorrectPassword");
  }
}

async function addProductPage(req, res) {
  // Display add product page
  res.render("addProduct");
}

async function addProductToDb(req, res) {
  console.log("Add product to DB");

  const addProductData = {
    category: req.body.category,
    item_name: req.body.item_name,
    manufacturer: req.body.manufacturer,
    model_no: req.body.model_no,
    product_description: req.body.product_description,
    external_product_url: req.body.external_product_url,
    image_url: req.body.image_url,
  };

  const addProduct = await db.SQLPostProduct(addProductData);

  res.render("addProduct");
}

async function editProduct(req, res) {
  const itemId = req.params;

  const getProductById = await db.SQLgetProductById(itemId.itemId);

  res.render("editProduct", { getProductById: getProductById });
}

async function editProductToDb(req, res) {
  const addProductData = {
    category: req.body.category,
    item_name: req.body.item_name,
    manufacturer: req.body.manufacturer,
    model_no: req.body.model_no,
    product_description: req.body.product_description,
    external_product_url: req.body.external_product_url,
    image_url: req.body.image_url,
    id: req.body.id,
  };

  const updateProductDb = await db.SQLUpdateProductById(addProductData);

  res.render("editSucess");
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
  addProductToDb,
  editProductToDb,
};
