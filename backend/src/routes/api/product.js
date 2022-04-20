const express = require('express');
const productController = require('../../controllers/productController');
const authMiddleware = require('../../middlewares/authMiddleware');
const uploadImageMiddleware = require('../../middlewares/uploadImageMiddleware');

const router = express.Router();

// Listar todos os produtos
router.get('/list', productController.list);

// Controle de produtos
router.post('/add', authMiddleware, uploadImageMiddleware.array('images', 4), productController.add);
router.delete('/remove/:productID', authMiddleware, productController.remove);

module.exports = router;