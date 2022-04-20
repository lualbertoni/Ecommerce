const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'public', 'uploads', 'temp'));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
    },
});

const cleanFolder = () => {
    const tempPath = path.join(__dirname, '..', 'public', 'uploads', 'temp');
    const files = fs.readdirSync(tempPath);
    files.forEach(file => fs.unlinkSync(path.join(tempPath, file)));
};

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);

        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('Tipo de arquivo não suportado'))
        }

        setTimeout(() => {
            cleanFolder();
        }, 20000);

        cb(null, true);
    }
});

module.exports = upload;