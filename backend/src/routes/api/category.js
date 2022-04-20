const express = require('express');
const categoryController = require('../../controllers/categoryController');
const authMiddleware = require('../../middlewares/authMiddleware');
const uploadImageMiddleware = require('../../middlewares/uploadImageMiddleware');

const router = express.Router();

// Listar todas as categorias
router.get('/list', categoryController.list);

// Controle de categorias
router.post('/add', authMiddleware, uploadImageMiddleware.single('images'), categoryController.add);
router.delete('/remove/:productID', authMiddleware, categoryController.remove);

module.exports = router;