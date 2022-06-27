import createProductService from '../services/products/createProduct.service'
import listProductsServices from '../services/products/listProducts.service'
import listOneProductService from '../services/products/listOneProduct.service'
import updateProductService from '../services/products/updateProduct.service'
import deleteProductService from '../services/products/deleteProduct.service'
import listProductByCategoryService from '../services/products/listProductByCategory.service'

class ProductsController {
    static async create(req, res) {
        try {
            const { name, price, category_id } = req.body

            const product = await createProductService(name, price, category_id)

            return res.status(201).json(product)

        } catch (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async read(req, res) {
        try {
            const listProducts = await listProductsServices()

            return res.status(200).json(listProducts)

        } catch (err) {
            return res.status(401).json(err.message)
        }
    }

    static async readOne(req, res) {
        try {
            const { id } = req.params

            const listOneProduct = await listOneProductService(id)

            return res.status(200).json(listOneProduct[0])

        } catch (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async update(req, res) {


        try {
            const { name } = req.body

            const { id } = req.params

            const updateProduct = await updateProductService(name, id)

            return res.status(200).json(updateProduct)

        } catch (err) {

            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params

            const deletedProduct = await deleteProductService(id)

            return res.status(204).json(deletedProduct)
        } catch (err) {

            return res.status(400).json({ message: err.message, status: 400 });
        }
    }

    static async readByCategory(req, res) {
        try {
            const { category_id } = req.params

            const listByCategory = await listProductByCategoryService(category_id)

            return res.status(200).json(listByCategory)

        } catch (err) {
            return res.status(400).json(err.message)
        }
    }
}

export default ProductsController