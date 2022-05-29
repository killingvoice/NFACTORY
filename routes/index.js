var express = require('express');
var router = express.Router();
var dataService = require('../service/data-service');

/* Index Page */
router.get('/', function(req, res) {
  var data = dataService.getData();
  res.render('100', { data: data });
});

/* Property add */
router.get('/property', function(req, res) {
  res.render('110');
});

/* item add */
router.get('/item', function(req, res) {
  var data = dataService.getData();
  res.render('120', { data: data });
});

/* Make random images */
router.get('/makeimages', function(req, res) {
  var data = dataService.makeImage();
  res.redirect('/');
});

/* View NFT images */
router.get('/view', function(req, res) {
  res.render('140');
});

router.get('/test', function(reqq, res) {
  dataService.dataRes();
  res.render('110');
});

module.exports = router;
