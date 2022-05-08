var express = require('express');
var router = express.Router();
var dataService = require('../service/data-service');

/* Index Page */
router.post('/properties', function(req, res, next) {
    dataService.addProperty(req.body.id);
    res.redirect('/');
});

module.exports = router;
