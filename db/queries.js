const pool = require("./pool");

async function SQLgetPopulateAllProducts() {
  const { rows } = await pool.query("SELECT * FROM Product_Information");
  return rows;
}

async function SQLGetProductByCategory(select_view) {
  const { rows } = await pool.query(
    "SELECT * FROM Product_Information WHERE category=($1)",
    [select_view]
  );
  return rows;
}

async function SQLgetProductById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM Product_Information WHERE id=$1",
    [id]
  );
  return rows;
}

module.exports = {
  SQLgetPopulateAllProducts,
  SQLgetProductById,
  SQLGetProductByCategory,
};
