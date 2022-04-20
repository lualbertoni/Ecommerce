const authMiddleware = require('../middlewares/authMiddleware');

module.exports = function (app) {
    // Rotas Públicas
    app.use('/login', require('./login'));

    // Rotas Protegidas
    app.use('/admin', authMiddleware, require('./admin'));

    // Rotas da API
    app.use('/api/product', require('./api/product'));
    app.use('/api/category', require('./api/category'));
    app.use('/api/auth', require('./api/auth'));

}