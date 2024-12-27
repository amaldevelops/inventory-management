const pool = require("./pool");

async function getPopulateAllProducts() {
  const { rows } = await pool.query("SELECT * FROM Product_Information");
  return rows;
}

async function getProductById(id)
{
  const {rows} = await pool.query("SELECT * FROM Product_Information WHERE id=$1",[id]);
  return rows;
}


module.exports = {
  getPopulateAllProducts,
  getProductById
};

