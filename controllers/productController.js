const db = require('../db/db');
const productModel = require('../models/productModel');

module.exports = {
    showAll: async (req, res) => {
        try {
            const data  = await productModel.getAllProducts();

            res.status(200).json({
                status: 200,
                data: data
            })

        }catch (error) {
            res.json({
                status:500,
                message: error.message
            })
        }
},
    showById: async (req, res) => {
        try {
            const id = req.params.id;
            const data  = await productModel.getProductById(id);

            res.status(200).json({
                status: 200,
                data: data
            })

        }catch (error) {
            res.json({
                status:500,
                message: error.message
            })
        }
},
    create: async (req, res) => {
        try {
            const {type, color, years, price, status} = req.body;
            await db('e_bike_rentals').insert({
                type: type,
                color: color,
                years: years,
                price: price,
                status: status
            })

            res.status(200).json({
                message: 'successfully added' 
            })

        }catch (error) {
            res.json({
                status:500,
                message: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const {type, color, years, price, status} = req.body;
            await db('e_bike_rentals').where('id',req.params.id).update({
                type: type,
                color: color,
                years: years,
                price: price,
                status: status
            })

            res.status(200).json({
                message: 'successfully updated' 
            })

        }catch (error) {
            res.json({
                status:500,
                message: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const {id} =req.params;
            await db ("e_bike_rentals").where("id", id).delete().returning("id");

            res.status(200).json({
                message: 'successfully deleted' 
            })

        }catch (error) {
            res.json({
                status:500,
                message: error.message
            });
        }
    }
}


