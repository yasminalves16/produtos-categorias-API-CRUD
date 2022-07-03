import database from "../../database";

const createProductService = async (name, price, category_id) => {
  try {
    if (!name) {
      throw new Error("Please, insert a name.");
    }

    if (!price) {
      throw new Error("Please, insert a price.");
    }

    const res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );

    return { message: "Product created", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;
