var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Property add */
router.get('/property', function(req, res, next) {
  res.send('respond with a resource');
});

/* item add */
router.get('/item', function(req, res, next) {
  res.send('respond with a resource');
});

/* Make random images */
router.get('/makeimages', function(req, res, next) {
  res.send('respond with a resource');
});

/* View NFT images */
router.get('/view', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
