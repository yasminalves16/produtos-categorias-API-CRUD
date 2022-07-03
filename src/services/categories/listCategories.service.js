import database from "../../database";

const listCategoriesServices = async () => {
  try {
    const res = await database.query("SELECT * FROM categories");

    if (res.rows.length === 0) {
      throw new Error("No categories found.");
    }

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoriesServices;
