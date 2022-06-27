import database from '../../database';

const listProductByCategoryService = async (category_id) => {
    try {
        const res = await database.query(
           "SELECT p.name,p.price, c.name category FROM products p JOIN categories c ON c.id = p.category_id WHERE c.id = $1;",
           [category_id]
        )

        return res.rows
        
    } catch (err) {
        throw new Error(err)
    }
}

export default listProductByCategoryService