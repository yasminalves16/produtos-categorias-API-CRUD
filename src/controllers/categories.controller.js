import createCategoryService from '../services/categories/createCategory.service'
import listCategoriesServices from '../services/categories/listCategories.service'
import listOneCategoryService from '../services/categories/listOneCategory.service'
import updateCategoryService from '../services/categories/updateCategory.service'
import deleteCategoryService from '../services/categories/deleteCategory.service'

class CategoriesController {
    static async create(req, res) {
        try {
            const { name } = req.body

            const categorie = await createCategoryService(name)

            return res.status(201).json(categorie)

        } catch (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async read(req, res) {
        try {
            const listCategories = await listCategoriesServices()

            return res.status(200).json(listCategories)

        } catch (err) {
            return res.status(401).json(err.message)
        }
    }

    static async readOne(req, res) {
        try {
            const { id } = req.params

            const listOneCategory = await listOneCategoryService(id)

            return res.status(200).json(listOneCategory[0])

        } catch (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async update(req, res) {
        try {
            const { name } = req.body

            const { id } = req.params

            const updateCategory = await updateCategoryService(name, id)

            return res.status(200).json(updateCategory)
        } catch (err) {

            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params

            const deletedCategory = await deleteCategoryService(id)

            return res.status(204).json(deletedCategory)
        } catch (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        }
    }
}

export default CategoriesController