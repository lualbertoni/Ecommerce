require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let cookie = req.headers.cookie;

    if (!cookie) {
        return res.status(401).redirect('/login');
    }

    cookie = cookie.split('=');

    if (cookie.length !== 2) {
        return res.status(401).redirect('/login');
    }

    const [scheme, tokenJWT] = cookie;

    if (scheme !== 'token') {
        return res.status(401).send({
            error: 'Token inválido',
            redirect: '/login',
        });
    }

    jwt.verify(tokenJWT, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).redirect('/login');
        }

        req.userId = decoded.id;

        return next();
    });
};