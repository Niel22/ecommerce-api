const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads');
    },
    filename: (req, res, cb) => {
        cb(null, Date.now() + path.extname(file.originalName));
    }
});

const fileFilter = (req, res, cb) => {
    if(file.mimetype === 'images/jpeg' || file.mimetype === 'images/jpg' || file.mimetype === 'images/png')
    {
        cb(null, true);
    }else{
        cb(new Error('Unsupported file'), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024*1024
    },
    fileFilter: fileFilter
});

module.exports = upload;