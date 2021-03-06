var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Express' });
});

router.get('/test', function(req, res, next){
  res.render('test', {test : 'test'});
});

module.exports = router;