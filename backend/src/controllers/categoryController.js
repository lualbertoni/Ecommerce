const Category = require('../models/categoryModel');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Adicionar uma categoria no banco de dados
async function add(req, res) {
    try {
        let { name } = req.body;
        let images = req.file;

        // Se os campos não estiverem vazios
        if (name && images.filename !== undefined) {
            name = name.toUpperCase();

            // Criando o categoria no banco de dados
            let category = await Category.create({
                name,
                images: images.filename,
            });

            fs.mkdirSync(path.join(__dirname, '..', 'public', 'uploads', 'categories', `${category._id}`), { recursive: true });

            await sharp(path.join(__dirname, '..', 'public', 'uploads', 'temp', images.filename))
                .resize(width = 1920, height = 1080)
                .toFile(path.join(__dirname, '..', 'public', 'uploads', 'categories', `${category._id}`, images.filename))

            res.status(200).json({
                message: 'Categoria adicionada com sucesso',
                category
            });

        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });
        }
    } catch {
        res.status(400).send({ error: 'Erro ao cadastrar categoria' });
    }
}

// Remover categoria do banco de dados
async function remove(req, res) {
    try {
        let id = req.params.categoryID;

        // Se os campos não estiverem vazios
        if (id !== undefined) {
            let category = await Category.findById(id);

            if (!category) {
                return res.status(400).send({ error: 'Categoria não encontrado' });
            }

            // Apagar pasta da categoria
            let categoryPath = path.join(__dirname, '..', 'public', 'uploads', 'categories', `${category._id}`);
            fs.rmSync(categoryPath, { recursive: true });

            await Category.deleteOne({ _id: id });

            res.status(200).send({ message: 'Categoria removido com sucesso' });
        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Erro ao remover categoria' });
        console.log(error);
    }
}

// Exibir a lista de categorias
async function list(req, res) {
    try {
        let categories = await Category.find();
        res.status(200).json(categories.map(category => ({
            Name: category.name,
            ID: category._id,
            Images: category.images,
        })));

    } catch (error) {
        res.status(400).send({ error: 'Erro ao listar categorias' });
        console.log(error);
    }
}

module.exports = { add, remove, list }