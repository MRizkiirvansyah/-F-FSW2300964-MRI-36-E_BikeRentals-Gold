const productController = require ('../controllers/productController')
const router = require ('express').Router()

router.get("/ebike_rentals", productController.showAll);
router.get("/ebike_rentals/:id", productController.showById);
router.post("/ebike_rentals", productController.create);
router.put("/ebike_rentals/:id", productController.update);
router.delete("/ebike_rentals/:id", productController.delete);

module.exports = router