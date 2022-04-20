const express = require('express');
const mongodb = require('./config/database');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use('/uploads', express.static(path.join(__dirname, './public/uploads')));

// Conectar ao banco de dados
mongodb.connect();

// Iniciar o servidor
mongoose.connection.on("open", function () {
    app.listen(process.env.PORT, () => {
        console.log('Servidor iniciado na porta', process.env.PORT);
    })
});

// Rotas
require("./routes/routes")(app);