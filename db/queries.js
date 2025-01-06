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

async function SQLdeleteById(id) {
  const { rows } = await pool.query(
    "DELETE FROM Product_information WHERE id=$1",
    [id]
  );
}

async function SQLPostProduct(addProductData) {
  console.log(addProductData);
  try {
    const query = `INSERT INTO Product_Information(Category,Item_Name,Manufacturer,Model_No,Product_Description,External_Product_URL,Image_URL )
    VALUES($1,$2,$3,$4,$5,$6,$7)`;

    const values = [
      addProductData.category,
      addProductData.item_name,
      addProductData.manufacturer,
      addProductData.model_no,
      addProductData.product_description,
      addProductData.external_product_url,
      addProductData.image_url,
    ];
    const { rows } = await pool.query(query, values);
  } catch (error) {
    console.error("Error in SQL Post Product Query");
  }
}

async function SQLUpdateProductById(addProductData) {
  try {
    const query = `UPDATE product_Information
    SET 
    Category=$1,
    Item_Name=$2,
    Manufacturer=$3,
    Model_No=$4,
    Product_Description=$5,
    External_Product_URL=$6,
    Image_URL=$7
    WHERE id=$8`;

    const values = [
      addProductData.category,
      addProductData.item_name,
      addProductData.manufacturer,
      addProductData.model_no,
      addProductData.product_description,
      addProductData.external_product_url,
      addProductData.image_url,
      addProductData.id,
    ];
    const result = await pool.query(query, values);

    if (result.rowCount > 0) {
      console.log(`Product with ID ${addProductData.id} updated successfully.`);
      return result.rowCount; // Optional: Return the number of rows updated
    } else {
      console.log(`No product found with ID ${addProductData.id}.`);
      return 0; // No rows were updated
    }
  } catch (error) {
    console.error("Error in SQL updating Product");
    throw error;
  }
}

module.exports = {
  SQLgetPopulateAllProducts,
  SQLgetProductById,
  SQLGetProductByCategory,
  SQLdeleteById,
  SQLPostProduct,
  SQLUpdateProductById,
};
