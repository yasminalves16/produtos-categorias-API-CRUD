import database from "../../database";

const listProductsServices = async () => {
  try {
    const res = await database.query("SELECT * FROM products");

    if (res.rows.length === 0) {
      throw new Error("No products found.");
    }

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsServices;
