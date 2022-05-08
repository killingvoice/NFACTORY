var express = require('express');
var router = express.Router();
var dataService = require('../service/data-service');

/* Index Page */
router.get('/', function(req, res, next) {
  res.render('100', { title: 'Express' });
});

/* Property add */
router.get('/property', function(req, res, next) {
  res.render('110');
});

/* item add */
router.get('/item', function(req, res, next) {
  res.render('120');
});

/* Make random images */
router.get('/makeimages', function(req, res, next) {
  res.render('130');
});

/* View NFT images */
router.get('/view', function(req, res, next) {
  res.render('140');
});

router.get('/test', function(reqq, res) {
  dataService.dataRes();
  res.render('110');
});

module.exports = router;
