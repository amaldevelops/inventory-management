const db = require("../db/queries");

async function getAllInventoryItems(req, res) {
  let mainPageRenderView;
  const { select_view } = req.query;
  console.log(select_view);

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

// async function getItemsByCategory(category, res) {
//   console.log(category);
//   const itemByCategory = await db.SQLGetProductByCategory(category);
//   return itemByCategory;
// }

async function getItemById(req,res)
{
  const select_view = req.params;
  console.log(select_view);

  const getProductById = await db.SQLgetProductById(5);

  res.render("viewItem", { getProductById: getProductById });
}

async function adminDashboard(req, res) {
  const getProductById = await db.SQLgetProductById(1);
  res.render("storeAdminDashboard", { getProductById: getProductById });


 const mainPageRenderView = await db.SQLgetPopulateAllProducts();
    res.render("storeAdminDashboard", { mainPageRenderView: mainPageRenderView });


}

module.exports = {
  getAllInventoryItems,
  adminDashboard,
  getItemById,
};
