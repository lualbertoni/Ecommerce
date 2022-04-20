const User = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Registro de usuário
async function register(req, res) {
    try {
        // Coletando os dados do usuário
        let { username, password } = req.body;

        // Se os campos não estiverem vazios
        if (username && password !== undefined) {
            username = username.toLowerCase();
            // Verificando se o usuário já existe
            const userCheck = await User.findOne({ username });

            if (userCheck) {
                return res.status(401).send({ error: 'Nome de usuário já existe' });
            }

            // Criptografando a senha
            let encryptedPassword = await bcryptjs.hash(password, 10);

            // Criando o usuário no banco de dados
            let user = await User.create({
                username,
                password: encryptedPassword,
            });

            // Removendo a senha do usuário
            user.password = undefined;

            // Retornando o usuário criado
            res.status(201).json(user);
        } else {
            res.status(400).send({ error: 'Preencha todos os campos' });
        }
    } catch (error) {
        res.status(400).send({ error: 'Erro ao cadastrar usuário' });
        console.log(error);
    }
};

// Login de usuário
async function login(req, res) {
    try {
        // Coletando os dados do usuário
        let { username, password } = req.body;

        // Se os campos não estiverem vazios
        if (username && password !== undefined) {
            username = username.toLowerCase();
            // Verificando se o usuário existe
            let userCheck = await User.findOne({ username });

            if (!userCheck) {
                return res.status(401).send({ error: 'Usuário ou senha inválidos' }); // Usuário não existe
            }

            // Comparando a senha coletada com a senha criptografada
            let passwordCheck = await bcryptjs.compare(password, userCheck.password);

            if (!passwordCheck) {
                return res.status(401).send({ error: 'Usuário ou senha inválidos' }); // Senha incorreta
            } else {
                // Removendo a senha do usuário
                userCheck.password = undefined;

                // Chamando a função generateToken para gerar o token
                let token = generateToken();

                res.cookie('token', token, {
                    maxAge: process.env.TOKEN_EXPIRATION * 60 * 1000,
                });

                // Retornando o usuário e token
                return res.status(200).json({
                    user: userCheck,
                    token
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: 'Erro ao fazer login' });
    }
};

// Gerando o token
function generateToken(params = {}) {
    return jwt.sign(params, process.env.SECRET_KEY, {
        expiresIn: process.env.TOKEN_EXPIRATION + 'm'
    });
};

module.exports = { register, login }