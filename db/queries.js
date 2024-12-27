const pool = require("./pool");

async function getPopulateAllProducts() {
  const { rows } = await pool.query("SELECT * FROM Product_Information");
  return rows;
}

module.exports = {
  getPopulateAllProducts,
};
