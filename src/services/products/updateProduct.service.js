import database from "../../database";

 const updateProductService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING *;",
      [name, id]
    );
    return { message: "Product updated", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService