import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import verifyProductMiddleware from "../middlewares/verifyProduct.middleware";

const productsRouter = Router();

productsRouter.post("", ProductsController.create);
productsRouter.get("", ProductsController.read);
productsRouter.get("/:id", verifyProductMiddleware, ProductsController.readOne);
productsRouter.patch(
  "/:id",
  verifyProductMiddleware,
  ProductsController.update
);
productsRouter.delete(
  "/:id",
  verifyProductMiddleware,
  ProductsController.delete
);
productsRouter.get(
  "/category/:category_id",
  verifyProductMiddleware,
  ProductsController.readByCategory
);

export default productsRouter;
