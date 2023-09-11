const db = require("../db/db");

const getProductById = async (id) => {
    return await db.select('*').from('e_bike_rentals').where('id', id).first()
}

const getAllProducts = async () => {
    return await db.select('*').from('e_bike_rentals')
}

module.exports = {
    getProductById,getAllProducts
}