import database from '../../database';

const listOneCategoryService = async (id) => {
    try {
        const res = await database.query(
            'SELECT * FROM categories WHERE id = $1', [id]
        )

        return res.rows
        
    } catch (err) {
        throw new Error(err)
    }
}

export default listOneCategoryService