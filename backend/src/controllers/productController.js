const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Adicionar um produto no banco de dados
async function add(req, res) {
    try {
        let { name, price, category } = req.body;
        let images = req.files;

        // Se os campos não estiverem vazios
        if (name && price && category !== undefined && images.length > 0) {
            name = name.toUpperCase();

            // Criando o produto no banco de dados
            let product = await Product.create({
                name,
                price,
                category,
                images: images.map(image => image.filename),
            });

            fs.mkdirSync(path.join(__dirname, '..', 'public', 'uploads', 'products', `${product._id}`), { recursive: true });

            await Promise.all(images.map(async (image) => {
                await sharp(path.join(__dirname, '..', 'public', 'uploads', 'temp', image.filename))
                    .resize(width = 1920, height = 1080)
                    .toFile(path.join(__dirname, '..', 'public', 'uploads', 'products', `${product._id}`, image.filename))
            }));

            res.status(201).json({
                message: 'Produto adicionado com sucesso',
                product
            });

        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });
        }
    } catch {
        res.status(400).send({ error: 'Erro ao cadastrar produto' });
    }
}

// Remover produto do banco de dados
async function remove(req, res) {
    try {
        let id = req.params.productID;

        // Se os campos não estiverem vazios
        if (id !== undefined) {
            let product = await Product.findById(id);

            if (!product) {
                return res.status(400).send({ error: 'Produto não encontrado' });
            }

            // Removendo pasta de imagens
            removeFolder(product);

            await Product.deleteOne({ _id: id });

            res.status(200).send({ message: 'Produto removido com sucesso' });
        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });

        }
    } catch (error) {
        res.status(400).send({ error: 'Erro ao remover produto' });
        console.log(error);
    }
}

// Exibir a lista de produtos
async function list(req, res) {
    try {
        let products = await Product.find();
        res.status(200).json(products.map(product => ({
            Name: product.name,
            Price: product.price,
            Category: product.category,
            ID: product._id,
            Images: product.images,
        })));

    } catch (error) {
        res.status(400).send({ error: 'Erro ao listar produtos' });
        console.log(error);
    }
}

// Apagar pasta de imagens
async function removeFolder(product) {
    let productPath = path.join(__dirname, '..', 'public', 'uploads', 'products', `${product._id}`);
    fs.rmSync(productPath, { recursive: true });
}


module.exports = { add, remove, list }