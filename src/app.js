import express from "express";
import "dotenv/config";
import { startDatabase } from "./database/index.js";
import categoriesRouter from "./routes/categories.routes.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

export default app.listen(process.env.PORT || 3333, () => {
  startDatabase();
  console.log("Server running");
});
