async function getAllInventoryItems(req, res) {
  res.render("index");
}

async function adminDashboard(req, res) {
  res.render("storeAdminDashboard");
}

module.exports = {
  getAllInventoryItems,
  adminDashboard,
};
