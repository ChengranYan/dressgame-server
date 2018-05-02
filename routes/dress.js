var express = require('express');
var router = express.Router();
var upload = require("../utils/imgsUpload.js");
var dressController = require('../controllers/dress.js');
// var upload = multer({ dest: 'uploads/' })



/* GET users listing. */
router.get('/', dressController.getList);

router.get('/:part/:id', dressController.getDetail);


// router.post('/job/addOrUpdate', upload.single("logo"), jobController.addOrUpdate);

// router.post('/upload', upload.any('logo'), dressController.upload);

router.get('/testcontent', dressController.getTest)

// router.post('/upload', upload.single('logo'), (req, res, next) => {
//   console.log(req)
//   res.json({
//     ok: false
//   })
// });

module.exports = router; 
