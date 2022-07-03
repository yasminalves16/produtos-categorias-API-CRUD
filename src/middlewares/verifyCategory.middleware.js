import database from "../database";

const verifyCategoryMiddleware = async (request, response, next) => {
  const { id } = request.params;

  try {
    const res = await database.query("SELECT * FROM categories WHERE id = $1", [
      id,
    ]);

    if (res.rows.length === 0) {
      return response.status(400).json({ message: "Category not found." });
    }

    next();
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default verifyCategoryMiddleware;
