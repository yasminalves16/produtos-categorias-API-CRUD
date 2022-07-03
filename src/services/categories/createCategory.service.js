import database from "../../database";

const createCategoryService = async (name) => {
  try {
    const nameVerify = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (nameVerify.rows[0]) {
      throw new Error("Name already exists.");
    }

    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );

    return { message: "Category created", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;
