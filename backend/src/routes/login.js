const express = require('express');
const path = require('path');
const router = express.Router();

// Página de login
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/build/index.html'));
});

module.exports = router;