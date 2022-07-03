import { Router } from "express";
import CategoriesController from "../controllers/categories.controller";
import verifyCategoryMiddleware from "../middlewares/verifyCategory.middleware";

const categoriesRouter = Router();

categoriesRouter.post("", CategoriesController.create);
categoriesRouter.get("", CategoriesController.read);
categoriesRouter.get(
  "/:id",
  verifyCategoryMiddleware,
  CategoriesController.readOne
);
categoriesRouter.patch(
  "/:id",
  verifyCategoryMiddleware,
  CategoriesController.update
);
categoriesRouter.delete(
  "/:id",
  verifyCategoryMiddleware,
  CategoriesController.delete
);

export default categoriesRouter;
