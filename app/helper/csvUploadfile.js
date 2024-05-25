//use multer for file upload
const multer = require('multer');
const path = require('path');


// use multer diskStorage for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/csvfile'), function (error, success) {
            if (error) throw error;
        })
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
});
//define uploaded storage path
const csvfileupload = multer({ storage: storage });


module.exports=csvfileupload