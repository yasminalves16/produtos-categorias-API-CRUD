import { Router } from 'express';
import CategoriesController from '../controllers/categories.controller';

const categoriesRouter = Router()

categoriesRouter.post('', CategoriesController.create)
categoriesRouter.get('', CategoriesController.read)
categoriesRouter.get('/:id', CategoriesController.readOne)
categoriesRouter.patch('/:id', CategoriesController.update)
categoriesRouter.delete('/:id', CategoriesController.delete)

export default categoriesRouter