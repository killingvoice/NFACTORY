var express = require('express');
var router = express.Router();
var dataService = require('../service/data-service');

const cors = require("cors");
const multer  = require('multer');

var storage = multer.diskStorage(
    {
        destination: './public/image/',
        filename:  (req, file, cb) => {
            cb(null, "" + Date.now())// 파일 원본이름 저장
        }
    }
);

var upload = multer( { storage: storage } );

/* Index Page */
router.post('/addproperty', function(req, res, next) {
    dataService.addProperty(req.body.id);
    res.redirect('/');
});
router.post('/additem', upload.single('image'), function(req, res, next) {
    const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = req.file;

    dataService.addItem(req.body.property, req.body.id, req.body.rarity, filename);

    // console.log("폼에 정의된 필드명 : ", fieldname);
    // console.log("사용자가 업로드한 파일 명 : ", originalname);
    // console.log("파일의 엔코딩 타입 : ", encoding);
    // console.log("파일의 Mime 타입 : ", mimetype);
    // console.log("파일이 저장된 폴더 : ", destination);
    // console.log("destinatin에 저장된 파일 명 : ", filename);
    // console.log("업로드된 파일의 전체 경로 ", path);
    // console.log("파일의 바이트(byte 사이즈)", size);

    res.redirect('/');
});

module.exports = router;
