var express = require('express');
var router = express.Router();

// champions league clubs
var clubs = [];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Draw Simulator'});
});

/* GET champions league draw page. */
router.get('/championsleaguedraw', function(req, res) {
    res.render('championsleaguedraw', {title: 'Champions League Draw'});
});

/* GET europa league draw page */
router.get('/europaleaguedraw', function(req, res) {
  res.render('europaleaguedraw', {title: 'Europa League Draw'});
});

module.exports = router;
