var express = require('express');
var router = express.Router();
var redisCache = require('../redis/redis-cache')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET request */
router.get('/request', function(req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at:' + req.requestTime + '</small>'
  res.send(responseText)
})

router.get('/cache-me-outside', redisCache, function(req, res) {
  res.send('Caching this response and request dawg')
})

module.exports = router;
